import Link from 'next/link';
import { useSession} from "next-auth/react"
import React,{useContext} from 'react'
import { PostContext } from '../../pages/post_article'








const ShowAddedPhotos = () => {


const { photos, setPhotos, setDate } = useContext(PostContext);




const delete_photo = (e) =>
{
  var photo_array = photos

  photo_array.splice(e.target.value, 1)

  setPhotos(photo_array)

  setDate(new Date)


}











if (photos.length > 0)
{

return <div className="f-container">
             
{photos.map((value, index) => (
   <div key={index} className="f-item">

<dd><img src={value[0]} className="big_photo"/></dd>
<dd><button className="delete_button fontsize5" value={index} onClick={delete_photo}>delete</button></dd>

</div>
))

}
</div>
}
else
{
    return null
}

}

export default ShowAddedPhotos