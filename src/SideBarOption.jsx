
import { useDataLayerValue } from "./Datalayer";
import SpotifyWebApi from "spotify-web-api-js";
export default function SideBarOption({ id, title, Icon, src }) {
  const spotify = new SpotifyWebApi();
  const [{ user, playlists , tracks }, dispatch] = useDataLayerValue();
  function handleClick(id) {
    const PlayId = id;
    for (let i = 0; i < playlists.items.length; i++) {
      if (playlists.items[i].id === PlayId) {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: playlists.items[i],
        });
        break;
      }
      spotify.getPlaylistTracks(PlayId).then((tracks) => {
        dispatch({
          type: "SET_TRACKS",
          tracks: tracks.items,
        });
      });
      const sidebar = document.getElementById("sideBar");
      const playlistContainer = document.querySelector(".playlists");
    
      if (window.innerWidth <= 500) {
        sidebar.classList.add("hidden");
        playlistContainer.classList.add("fullscreen");
        
      } else {
        sidebar.classList.remove("fullscreen");
        playlistContainer.classList.remove("fullscreen");
      }
      console.log(tracks);
    }
  }
  
  return (
    <>
      {Icon ? (
        <button className="btn sideBarButton">
          <div className="d-flex align-items-baseline ">
            <Icon style={{ height: "inherit" }} />{" "}
            <h6 className="p-2">{title}</h6>
          </div>
        </button>
      ) : (
      <button
          className=" sideBarButton btn  playlistContainer "
          onClick={() => handleClick(id)}
        >
           <div className="row d-flex ">
           <div className="col-auto">
            <img 
              d="playlistImg" className="playlistImg" style={{margin:"0"}}
              src={src}
            />
            </div>
            <div className="col  playlistAlbum justify-content-center" style={{fontSize:"1.1vw",marginLeft:"0"}} >
              <b className="row-5 playlistAlbum "  >{title}</b>
              <p className="row-5 playlistAlbum " style={{opacity: "0.7"}}>
              Playlist • {user.display_name}
              </p>
            </div>
          </div>
        </button>
      )}
    </>
  );
}

