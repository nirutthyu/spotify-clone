
export const initialState = {

  user: null,
  token: null,
  playlists: [],
  playlist: {},
  tracks: [],
  playing: false,
  playingId: null,
  item: null,
  track_name: null,
  track_artist: null,
  track_img: null, 
  
};

const reducer = (state, action) => {
  console.log(action); // For debugging purposes

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    case "SET_TRACKS":
      return {
        ...state,
        tracks: action.tracks,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
        playingId: action.playing ? action.id : null,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TRACK":
      return {
        ...state,
        track_name: action.track_name,
        track_img: action.track_img,
        track_artist: action.track_artist,
      };
    default:
      return state;
  }
};

export default reducer;
