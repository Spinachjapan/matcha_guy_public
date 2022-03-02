import { server } from "../config";
import { useRouter } from 'next/router';
import axios from "axios";


export default async function RetrieveArticle() {

  

  const  article_data = await fetch(server + '/api/retrieve_article',
  {
      mode: 'cors',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
               
      },
      body: JSON.stringify({})
  }).then(res => res.json())


  return article_data


  


  } 