import Link from 'next/link';
import { useSession} from "next-auth/react"
import React,{useContext} from 'react'
import { PostContext } from '../../pages/post_article'







  





const PhotoAddButton = () => {


const { photos, setPhotos, setDate } = useContext(PostContext);


const add_photo = (e) =>
  {
    
    if (photos.length < 10)

    {
    let photo_array = photos

    const file = e.target.files[0]


    
        let reader = new FileReader()
        reader.onload = (e) => {

         photo_array.push([e.target.result, file.type])

            setPhotos(photo_array)
    setDate(new Date)

        };
        reader.readAsDataURL(file)

       var obj = document.getElementById("target1");
        obj.value = "";

      }

    }



if (photos.length >= 10)
{

 return <label>Full Of Photos</label>
}

else
{
    return <label>
 
  
    <label className="add_photo_button"  htmlFor="target1">+|Add New Photo</label>
                     <input onChange={add_photo} accept="image/*" type="file" name="photo1" className="filesend" id="target1"/>
     
            </label>
}





}

export default PhotoAddButton