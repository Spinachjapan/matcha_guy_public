import Layout from "../components/Layout"
import CheckEmail from "../functions/CheckEmail"
import { useSession, signIn, signOut } from "next-auth/react"  

import RetrieveArticle from "../functions/RetrieveArticle"
import ArticleTemplate from "../components/ArticleTemplate"
import { server } from "../config"





import { useState, useEffect } from "react/cjs/react.development"
export default function Home() {

 const { data: session } = useSession()
 if(session) {
  CheckEmail(session.user.email)
 }

 const [articles, setArticles] = useState([])

 useEffect(() => {

 
RetrieveArticle().then(res=>{setArticles(res)})


 }, [])



  
  return <Layout>
    
{articles.map((value, index) => (
   <span key={index}>
     {ArticleTemplate(value)}
  
</span>
 ))} 


  </Layout>
}
















// export default function Home({ articles }) {

//  const { data: session } = useSession()
//  if(session) {
//   CheckEmail(session.user.email)
//  }

  
//   return <Layout>
    
// {articles.map((value, index) => (
//    <span key={index}>
//      {ArticleTemplate(value)}
  
// </span>
//  ))} 


//   </Layout>
// }

// export async function getServerSideProps() {

  
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(server + '/api/retrieve_article',
//   {
//       mode: 'cors',
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
               
//       },
//       body: JSON.stringify({})
//   })
//   const articles = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       articles,
//     },
//   }
// }