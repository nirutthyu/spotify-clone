import React, { useEffect, useState,useRef } from "react";
import ColorThief from "colorthief";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import PlaylistContainer from "./PlaylistContainer";
import { useDataLayerValue } from "./Datalayer";

export default function Player() {
  const [{ playlist }] = useDataLayerValue();
  const [bgColor, setBgColor] = useState("#000000");
  const audioRef = useRef(new Audio());
  useEffect(() => {
    if (playlist && playlist.images && playlist.images.length > 0) {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = playlist.images[0].url;
      img.onload = () => {
        const colorThief = new ColorThief();
        const dominantColor = colorThief.getColor(img);
        setBgColor(`rgb(${dominantColor.join(", ")})`);
      };
    } else {
      setBgColor("#000000");
    }
  }, [playlist]);

  return (
    <>
      <div className="main d-flex flex-row">
        <div id="sideBar" className="sideBar">
          <SideBar />
        </div>
        <div className="body d-flex flex-column playlists">
          <div
            style={{ background: `linear-gradient(to bottom, black, ${bgColor}` }}
            className="headerContainer container-fluid m-0"
          >
            <div className="header">
              <Header color={bgColor} />
            </div>
          </div>
          {playlist && Object.keys(playlist).length ? (
            <PlaylistContainer color={bgColor} audioRef={audioRef}/>
          ) : null}
        </div>
        <div className="container-fluid Footer">
          <Footer audioRef={audioRef} />
        </div>
      </div>
    </>
  );
}
