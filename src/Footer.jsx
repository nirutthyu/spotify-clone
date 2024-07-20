import React from "react";
import { PiShuffle, PiDevices } from "react-icons/pi";
import { MdOutlinePauseCircleFilled, MdOutlineSmartDisplay, MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { LuRepeat2 } from "react-icons/lu";
import { HiOutlineQueueList } from "react-icons/hi2";
import { IoMdVolumeHigh } from "react-icons/io";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { useDataLayerValue } from "./Datalayer";

export default function Footer({audioRef}) {
  const [{playing, playingId, track_name, track_artist, track_img }, dispatch] = useDataLayerValue();

    const handlePlayPause = () => {
      if (audioRef.current) {
        if (playing) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        dispatch({
          type: "SET_PLAYING",
          playing: !playing,
          id: playing ? null : playingId,
        });
      }
    };

  return (
    <div className="footer-container container-fluid">
      <div className="footer-content d-flex align-items-center justify-content-between">
        <div className="track-info col d-flex align-items-center">
          {track_name && (
            <img
              className="track-img"
              src={track_img}
              alt="Track"
            />
          )}
          <div className="track-details col playlistAlbum" style={{maxWidth:"250px"}}>
            <b className="track-name ">{track_name}</b>
            <p className="track-artist ">{track_artist}</p>
          </div>
        </div>
        <div className="controls d-flex justify-content-center">
          <button className="btn btn-dark btn-sm bg-transparent control-button"><PiShuffle className="control-icon" /></button>
          <button className="btn btn-dark btn-sm bg-transparent control-button"><MdSkipPrevious className="control-icon" /></button>
          {playing ? (
            <button className="btn btn-dark btn-sm bg-transparent control-button" onClick={handlePlayPause}><MdOutlinePauseCircleFilled className="control-icon" /></button>
          ) : (
            <button className="btn btn-dark btn-sm bg-transparent control-button" onClick={handlePlayPause}><MdOutlinePlayCircleFilled className="control-icon" /></button>
          )}
          <button className="btn btn-dark btn-sm bg-transparent control-button"><MdSkipNext className="control-icon" /></button>
          <button className="btn btn-dark btn-sm bg-transparent control-button"><LuRepeat2 className="control-icon" /></button>
        </div>
        <div className="extras d-flex justify-content-end align-items-center">
          <MdOutlineSmartDisplay className="extra-icon m-2" />
          <HiOutlineQueueList className="extra-icon m-2" />
          <PiDevices className="extra-icon m-2" />
          <IoMdVolumeHigh className="extra-icon m-2" />
          <hr className="volume-slider" />
          <AiOutlineExpandAlt className="extra-icon m-2" />
        </div>
      </div>
    </div>
  );
}
