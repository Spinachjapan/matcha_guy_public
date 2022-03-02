import Link from 'next/link';
import { useSession} from "next-auth/react"
import React,{useContext} from 'react'
import { PostContext } from '../../pages/post_article'








const StateSelect = () => {

 

const {setState } = useContext(PostContext);



return  (<table align="center" style={{width: "85%"}}><tbody><tr align="left" className='fontsize5'>State or Territory:</tr> <tr align="left"><select className='fontsize6' id="state" name="state" onChange={(e) => setState(e.target.value)}><option value="NSW">NSW</option>
<option value="VIC">VIC</option>
<option value="QLD">QLD</option>
<option value="WA">WA</option>
<option value="SA">SA</option>
<option value="TAS">TAS</option>
<option value="ACT">ACT</option>
<option value="NT">NT</option>


    </select></tr></tbody></table>)



}

export default StateSelect