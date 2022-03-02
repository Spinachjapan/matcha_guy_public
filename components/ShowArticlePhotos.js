import { useSession} from "next-auth/react"
import { server } from "../config";
import { useRouter } from 'next/router';




const ShowArticlePhotos = (article_id, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) =>
{

    let photo_num_array = [];
        
    if (p1 != null)
    {
      photo_num_array.push("1")
    }
    if (p2 != null)
    {
      photo_num_array.push("2")
    }
    if (p3 != null)
    {
      photo_num_array.push("3")
    }
    if (p4 != null)
    {
      photo_num_array.push("4")
    }
    if (p5 != null)
    {
      photo_num_array.push("5")
    }
    if (p6 != null)
    {
      photo_num_array.push("6")
     
    }
    if (p7 != null)
    {
      photo_num_array.push("7")
    }
    if (p8 != null)
    {
      photo_num_array.push("8")
    }
    if (p9 != null)
    {
      photo_num_array.push("9")
     
    }
    if (p10 != null)
    {
      photo_num_array.push("10")
     
    }


    return (
<div className="photo_group">
        
          {photo_num_array.map((value, index) => 
          (
            <div className="area" key={index} style={{marginRight: "5px"}}><img src={server +"/api/photo_output_article/" + article_id + '/' + value + '/' + new Date()} className="big_photo"/></div>
     
          ))}
        </div>



      )






}

export default ShowArticlePhotos


