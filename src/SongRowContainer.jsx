import { useDataLayerValue } from "./Datalayer";
import SongRow from "./Songrow";
export default function SongRowContainer({playing,setPlaying,audioRef}) {
  let i = 1;
  const [{ tracks }] = useDataLayerValue();
  const songs = tracks.map((x) => (
    <SongRow
      key={i++}
      id={i}
      name={x.track.name}
      album={x.track.album.name}
      artist={x.track.artists}
      img={x.track.album.images.length > 0 ? x.track.album.images[0].url : ''}
      date={x.added_at.substring(0, 10)}
      time={(x.track.duration_ms / 60000).toFixed(2)}
      uri={x.track.preview_url}
      playing={playing===i}
      setPlaying={setPlaying}
      audioRef={audioRef}
    />
  ));
  return <div>{songs}</div>;
}
