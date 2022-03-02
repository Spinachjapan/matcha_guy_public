import { server } from "../config";
import { useRouter } from 'next/router';



export default async function CheckEmail(email) {

  

  const router = useRouter();

  fetch(server +'/api/check_email',
  {
      mode: 'cors',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
               
      },
      body: JSON.stringify({email: email})
  })
  .then(response => response.json())
  .then(data => {




    if (data == 0)
    { 
        router.push('/create_account');
    }


  
    
  
    
}).catch((error) => {
   
});





  
  } 