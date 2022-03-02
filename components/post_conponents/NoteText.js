import Link from 'next/link';
import { useSession} from "next-auth/react"
import React,{useContext} from 'react'
import { PostContext } from '../../pages/post_article'




const NoteText = () => {

 

const { setNote } = useContext(PostContext);


return  (<table align="center" style={{width: "85%"}}><tbody><tr align="left">NOTE:</tr> <tr><textarea rows={8} className="fontsize5" style={{width: "100%"}} onChange={(e) => setNote(e.target.value)}></textarea></tr></tbody></table>)
}

export default NoteText