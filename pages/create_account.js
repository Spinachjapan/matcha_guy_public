import Layout from "../components/Layout"
import { useSession} from "next-auth/react"
import { server } from "../config";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import React from 'react';
import NewUsernameInput from "../components/NewUsernameInput";



export const NewUsernameContext = React.createContext()


export default function CreateAccount() {

    const [newUsername, setNewUsername] = useState(null)

    const [usernameError, setUsernameError] = useState(null)

    const { data: session } = useSession()

    const router = useRouter();

    


   
const new_username_state = {newUsername, setNewUsername, usernameError, setUsernameError, router}



  
    
    return (
      <>
          
          
          <NewUsernameContext.Provider value={new_username_state}><NewUsernameInput/></NewUsernameContext.Provider>
          
          
          
          </>
    )

    


  

}