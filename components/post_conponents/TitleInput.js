import Link from 'next/link';
import { useSession} from "next-auth/react"
import React,{useContext} from 'react'
import { PostContext } from '../../pages/post_article'




const TitleInput = () => {

 

const {setTitle } = useContext(PostContext);

return  (<table align="center" style={{width: "85%"}}><tbody><tr align="left">TITLE:</tr> <tr><input type="text" className="fontsize5" style={{width: "100%"}} onChange={(e) => setTitle(e.target.value)}/></tr></tbody></table>)

}

export default TitleInput