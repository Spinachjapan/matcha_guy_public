import Layout from "../components/Layout"
import { useSession} from "next-auth/react"
import { server } from "../config";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import StateSelect from "../components/post_conponents/StateSelect";
import React from 'react';
import PhotoAddButton from "../components/post_conponents/PhotoAddButton";
import ShowAddedPhotos from "../components/post_conponents/ShowAddedPhotos";
import GoogleMapView from "../components/GoogleMapView";
import TitleInput from "../components/post_conponents/TitleInput";
import NoteText from "../components/post_conponents/NoteText";
import AreaInput from "../components/post_conponents/AreaInput";
import PostButton from "../components/post_conponents/PostButton";

export const PostContext = React.createContext()

export default function PostArticle() {


  const [title, setTitle] = useState(null)
  const [note, setNote] = useState(null)

  const [area, setArea] = useState(null)

  const [photos, setPhotos] = useState([]);
  const [date, setDate] = useState(null);

  const [markers, setMarkers] = useState([]);
  
  const [location, setLocation] = useState("")
     
  const [center, setCenter] = useState({
        lat: -23.6980,
        lng: 133.8807,
     })

      const [Lat, setLat] = useState(null)
      const [Lng, setLng] = useState(null)

      const [state, setState] = useState("NSW");

      const router = useRouter();




const title_state = {setTitle}
const note_state = {setNote}
const state_state = {setState}
const area_state = {setArea}
const photos_state = {photos, setPhotos, setDate}
const g_map_state = { markers, setMarkers, location, setLocation, center, setCenter, Lat, setLat, Lng, setLng}
const post_state = {title, note,state , area, photos, Lat, Lng, router}

    
    return (
      <Layout><div className="center">

 <PostContext.Provider value={photos_state}><PhotoAddButton/><ShowAddedPhotos/></PostContext.Provider>
     

  <PostContext.Provider value={title_state}><TitleInput/></PostContext.Provider>


  <PostContext.Provider value={note_state}><NoteText/></PostContext.Provider>

  <PostContext.Provider value={state_state}><StateSelect/></PostContext.Provider>
 

  <PostContext.Provider value={area_state}><AreaInput/></PostContext.Provider>
  
      <PostContext.Provider value={g_map_state}><GoogleMapView/></PostContext.Provider>
      
      <PostContext.Provider value={post_state}><PostButton/></PostContext.Provider>
      
      

      
      
      
      
      
      
      
      </div></Layout>
    )



  

}