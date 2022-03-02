import Link from 'next/link';
import { useSession} from "next-auth/react"
import React,{useContext} from 'react'
import { PostContext } from '../../pages/post_article'
import { server } from "../../config";


const PostButton = () => {

 
const { title, note,state , area, photos, Lat, Lng, router} = useContext(PostContext);
const { data: session } = useSession()





const post_article = () =>
    {
        

      let confirm_post = confirm("Will you post this article?")

      if (confirm_post == false)
      {
        return
      }

      const data = {

        email: session.user.email,
        title: title,
        note: note,
        state: state,
        area: area,
        photos: photos,
        lat: Lat,
        lng: Lng


      }
   
    
        //setLoading(true)
           


         fetch(server +'/api/post_article',
                {
                    mode: 'cors',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                       
                        
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                  router.push('/');
                
                  
              }).catch((error) => {
                
                  
              });
            
            




    }






















if (photos.length === 0)
{
  return <label className="fontsize5">Input at least 1 photo.</label>
}
else
{

  return <button className="fontsize5" onClick={post_article}>Post</button>


}

}

export default PostButton