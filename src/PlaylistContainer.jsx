
import { useDataLayerValue } from "./Datalayer";
import SongRowContainer from "./SongRowContainer";
const defaultProfileImg = "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";

export default function PlaylistContainer({color,playing,setPlaying,audioRef}) {
  const [{ playlist, user }] = useDataLayerValue();


  if (playlist != null) {
    {
      let playlistduration = playlist.tracks.total * 4;
      var hr = Math.floor(playlistduration / 60);
     
      var min = playlistduration % 60;
    
      var timeStr=hr===0?`${min} min`:`${hr} hr,${min} min`;
    }
    return (
      <div  style={{background:`linear-gradient(to bottom,${color},black`}} className="playlists" >
        <div className="container d-flex flex-direction-column ml-0">
          <img
            className="rounded playlistContainerImg"
            src={playlist?.images[0]?.url}
          />
          <div style={{ fontSize: "1.5vw" }} className="container headerPlaylist">
            <div className="playlistConainerInfo">
            <p className="playlist">Playlist</p>
            <h1>
              <b>{playlist.name}</b>
            </h1>
            <p style={{ opacity: "0.7", fontSize: "1.2vw" }}>
              {playlist.description}
            </p>
            </div>
            <div className=" userInfo h-25 d-flex flex-direction-row align-items-center">
              <img
                
                className="rounded-circle userImg"
                src={user?.images[0]?.url||defaultProfileImg}
              ></img>
              <div className="m-2">
                <div style={{ fontSize: "1.2vw" }} className="d-flex">
                  <div className="details"style={{ opacity: "1.5" }}>
                    <b className="name">{playlist.owner.display_name}</b> •{" "}
                    {playlist.tracks.total} songs,{" "}
                  </div>
                  <div className="details"style={{ opacity: "0.7" }}>
                    {" "}
                    {timeStr}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="container songsContainer m-0">
          <SongRowContainer playing={playing} setPlaying={setPlaying} audioRef={audioRef} />
        </div>
     
      </div>
    );
  }
}
