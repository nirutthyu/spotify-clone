export const authEndpoint="https://accounts.spotify.com/authorize";
const redirectURI="https://spotify-echo.vercel.app/"
const clientId=import.meta.env.VITE_CLIENT_ID;
console.log(clientId)
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "playlist-read-private",
   "playlist-read-collaborative",
   "user-read-private",
   "user-read-email"
  ];
  export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});
  };
  export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
