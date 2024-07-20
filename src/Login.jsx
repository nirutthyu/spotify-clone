import React from "react";
import { loginURL } from "./spotify";
export default function Login() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="text-center d-flex flex-column align-items-center ">
        <img
          className="image-responsive logo mb-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png"
        />
        <a href={loginURL}>
          <button className="btn btn-success rounded-pill">
            Login with spotify
          </button>
        </a>
      </div>
    </div>
  );
}
