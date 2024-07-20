import React, { useState, useRef } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./Datalayer";

export default function SongRow({
  id,
  name,
  date,
  time,
  album,
  img,
  artist,
  uri,
  audioRef
}) {
  const [{ playing, playingId, track_name, track_artist, track_img }, dispatch] = useDataLayerValue();
  const [hover, setHover] = useState(false);
  // Local audioRef
  const artists = artist.map((x) => x.name).join(",");
  const spotify = new SpotifyWebApi();

  const playTrack = () => {
    if (uri) {
      if (playing && playingId !== id) {
        dispatch({ type: "SET_PLAYING", playing: false, id: null });
      }
      audioRef.current.src = uri; // Set the URI dynamically
      audioRef.current.play(); // Play the audio
    } else {
      console.error("No URI provided for playback");
    }
    dispatch({
      type: "SET_TRACK",
      track_name: name,
      track_img: img,
      track_artist: artists,
    });
    dispatch({ type: "SET_PLAYING", playing: true, id });
  };

  const pauseTrack = () => {
    audioRef.current.pause();
    dispatch({ type: "SET_PLAYING", playing: false, id: null });
  };

  return (
    <div
      style={{ fontSize: "0.8rem" }}
      className="container-fluid songRow"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="row">
        <div className="playlistName mt-2 col-5">
          <div className="row">
            {hover && playingId!==id && (
              <div className="col-1 mt-1 songIcon" >
                <IoMdPlay onClick={playTrack} />
              </div>
            )}
            {hover && playing && playingId === id && (
              <div className="col-1 mt-1 songIcon">
                <IoPause onClick={pauseTrack} />
              </div>
            )}
            {!hover && <div className="col-1">{id}</div>}

            <img
              style={{
                height: "3vw",
                width: "4.5vw",
                marginLeft: "1vw",
                borderRadius: "2px",
              }}
              src={img}
              alt="Album Art"
            />
            <div className="col playlistAlbum">
              <b className="row-5">{name}</b>
              <p className="row-5 playlistAlbum" style={{ opacity: "0.7" }}>
                {artists}
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 album mt-2 playlistAlbum">{album}</div>
        <div className="col-2 date mt-2">{date}</div>
        <div style={{ textAlign: "right" }} className="col mt-2">
          {time.replace(".", ":")}
        </div>
      </div>
    </div>
  );
}
