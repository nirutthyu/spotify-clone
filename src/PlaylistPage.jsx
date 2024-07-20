import Header from "./Header"
import PlaylistContainer from "./PlaylistContainer"
import { useDataLayerValue } from "./Datalayer"
export default function PlaylistPage({bgColor}){
    const[{playlist}]=useDataLayerValue()
    return(
        <>
         <div className="body d-flex flex-column playlists ">
         <div style={{background:`linear-gradient(to bottom,black,${bgColor}`}}className="container-fluid m-0">
          <div className="header"><Header color={bgColor} /></div>
         
         </div>
        {playlist && Object.keys(playlist).length ? <PlaylistContainer color={bgColor}/> :null  } 
        </div>
        </>
    )
}