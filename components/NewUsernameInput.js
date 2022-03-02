import Link from 'next/link';
import { useSession} from "next-auth/react"
import React,{useContext} from 'react'
import {NewUsernameContext} from "../pages/create_account"
import { server } from '../config';


export default function NewUsernameInput() {



const {newUsername, setNewUsername, usernameError, setUsernameError, router} = useContext(NewUsernameContext);



    const { data: session } = useSession()

    const check_username_query = async  (username) => {


  const info = await fetch(server +'/api/check_username',
  {
      mode: 'cors',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
               
      },
      body: JSON.stringify({username: username})
  })
  
      
      if (info.length === 1)
      {

        setUsernameError("This username has been used already.")
        setNewUsername(null)
        
 
      }
      else
      {
         
        setUsernameError(null)
        setNewUsername(username)
      }
    
    }


    const insert_new_account =  () =>
    {

        fetch(server +'/api/create_account',
        {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
               
                
            },
            body: JSON.stringify({

                username: newUsername,
                email: session.user.email

            })
        })
        .then(response => response.json())
        .then(data => {
          
          router.push('/');

          
      }).catch((error) => {
         
          
      });

     
      
    }







    const  check_username = (event) => {


        let new_username = event.target.value;  
   
        
        if (new_username.length < 7)
        {
          
            setUsernameError("User name must be more than 7 letters.");
            setNewUsername(null)
            
        }
        else if (new_username.match(/\W/))
        {

          setUsernameError("You can use a ~ z, 0 ~ 9 and Underscore(_).");
          setNewUsername(null)


        }
        else
        {

          check_username_query(new_username)
           

    }
      

      }


      let finalUsername = null

      if (usernameError == null && newUsername != null)
      {
        finalUsername = <input type="button" value="create" onClick={insert_new_account}/>


      }











  
    
    return (
        <div className="center" style={{marginTop: 30}}>create username:<br/>
        <input onChange={check_username} maxLength={20} type="text" style={{marginTop: 30}} /><br/>{usernameError}{finalUsername}</div>
    )

    


  

}