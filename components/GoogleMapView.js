import Link from 'next/link';
import { useSession} from "next-auth/react"
import React,{useContext} from 'react'
import { PostContext } from '../pages/post_article'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";






  





const GoogleMapView = () => {


const { markers, setMarkers, location, setLocation, center, setCenter, Lat, setLat, Lng, setLng} = useContext(PostContext);



const onMapClick = (event) => {
    
    setMarkers([{
       lat: event.latLng.lat(),
       lng: event.latLng.lng(),
    }]);
    setLat(event.latLng.lat())
    setLng(event.latLng.lng())

  //   setCenter({
  //     lat: event.latLng.lat(),
  //     lng: event.latLng.lng(),
  //  })
 }





const geocode = () => {


  const geocoder = new window.google.maps.Geocoder();
  geocoder.geocode({ address: location }, ( results, status ) => {
    if (status === 'OK') {
    
      let new_center = Object.assign({}, center);
      new_center = {
        lat: results[0].geometry.location.lat(), 
        lng: results[0].geometry.location.lng()
      };

      setMarkers([new_center]);
      setCenter(new_center)

      setLat(results[0].geometry.location.lat())
      setLng(results[0].geometry.location.lng())

     



    }
  });
}

const delete_position = () =>
{
  setMarkers([])
  setLat(null)
  setLng(null)
}


let delete_position_button = <div style={{color: "red"}} className="fontsize4">Location is not selected.</div>

if (Lat != null && Lng != null)
{
  delete_position_button = <button onClick={delete_position} className="delete_button fontsize4">delete location</button>
}








return (
<>

<table align="center" style={{width: "85%"}}><tbody> 
<tr align="left">Position on Map:</tr>
  <tr><input className="fontsize5" placeholder="○○○○ Sydney NSW" maxLength={150} style={{width: "100%"}} onChange={(e) => setLocation(e.target.value)}  type='text' value={location}/></tr>
<tr align="right"><button onClick={geocode} className="fontsize4">SEARCH</button></tr>
<tr align="right">{delete_position_button}</tr>
</tbody></table>






<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "60vh",
      }}
      center={center}
      zoom={4}
      onClick={onMapClick}
    >
     {markers.map((marker, index) => (
    <Marker
       key={index}
       position={{lat: marker.lat, lng: marker.lng}}
    >
    </Marker>
 ))}
    </GoogleMap>
  </LoadScript>
   

</>

)



}

export default GoogleMapView