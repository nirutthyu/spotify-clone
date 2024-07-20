import React from "react";
import { useDataLayerValue } from "./Datalayer";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { GiTransparentSlime } from "react-icons/gi";
const defaultProfileImg = "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
export default function Header( {color}) {
  const [{ user,playlist }, dispatch] = useDataLayerValue();
  function handleClick(){
    dispatch({
      type: "SET_PLAYLIST",
      playlist:null,
    });
    const sidebar = document.getElementById("sideBar");
    const playlistContainer = document.querySelector(".playlists");
    sidebar.classList.remove("hidden");
    playlistContainer.classList.remove("fullscreen");
  }
  return (
    <div  className="container d-flex align-items-center">
      <div className="headerArrow">
        <FaChevronLeft className="headerIcon" onClick={handleClick}/>
        <FaChevronRight className="headerIcon" />
      </div>
      <div className="container h-100 d-flex justify-content-end ">
      <div className="headerFunction">
        <button style={{fontSize:"1vw"}} className="HeaderButton rounded-pill ">Explore premium</button>
        <button style={{fontSize:"1vw"}} className="HeaderButton rounded-pill">Install App</button>
        <button style={{fontSize:"1vw"}} className="HeaderButton rounded-circle">
          <center>
            <FaRegBell />
          </center>
        </button>
        </div>
        <div className="profile">
        <img className="rounded-circle profile" src={user?.images[0]?.url||defaultProfileImg}></img>
      </div>
      </div>
    </div>
  );
}
