import { useSession} from "next-auth/react"
import { server } from "../config";
import { useRouter } from 'next/router';
import ShowArticlePhotos from "./ShowArticlePhotos";



const ArticleTemplate = (article) =>
{



  return (

<>

<div className="fontsize5 right" style={{margin: "10px 10% 10px 0"}}>{article.title}</div>

    {ShowArticlePhotos(article.article_id, article.photo_type1, article.photo_type2, 
      article.photo_type3, article.photo_type4, article.photo_type5, article.photo_type6, article.photo_type7, article.photo_type8, article.photo_type9, article.photo_type10)}

<div className="fontsize4 right" style={{marginRight: "10%"}}>{article.area}&nbsp;&nbsp;{article.state}</div>

<div className="fontsize5"  style={{wordBreak: "break-word", padding: "0% 7% 0% 7%",}}>{article.note}</div>


<hr/>

</>

  )

}

export default ArticleTemplate


