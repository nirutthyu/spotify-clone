import { useEffect, useState } from "react";
import { useDataLayerValue } from "./Datalayer";
import SongRow from "./Songrow";

export default function SongRowContainer({ playing, setPlaying, audioRef }) {
  const [{ tracks }] = useDataLayerValue();
  const [songsWithPreview, setSongsWithPreview] = useState([]);

  useEffect(() => {
    async function fetchAllPreviews() {
      if (!tracks || tracks.length === 0) return;

      const songsWithURIs = await Promise.all(
        tracks.map(async (x, index) => {
          try {
            const response = await fetch(`https://spotify-backend-haqi.onrender.com/preview?name=${encodeURIComponent(x.track.name)}`);
            const data = await response.json();
            const preview_uri = data.previewUrl || "";

            return {
              id: index + 1,
              name: x.track.name,
              album: x.track.album.name,
              artist: x.track.artists,
              img: x.track.album.images.length > 0 ? x.track.album.images[0].url : "",
              date: x.added_at.substring(0, 10),
              time: (x.track.duration_ms /6000).toFixed(2),
              uri: preview_uri,
            };
          } catch (error) {
            console.error(`Error fetching preview for ${x.track.name}:`, error);
            return null;
          }
        })
      );

      setSongsWithPreview(songsWithURIs.filter(Boolean));
    }

    fetchAllPreviews();
  }, [tracks]);

  return (
    <div>
      {songsWithPreview.map((song) => (
        <SongRow
          key={song.id}
          id={song.id}
          name={song.name}
          album={song.album}
          artist={song.artist}
          img={song.img}
          date={song.date}
          time={song.time}
          uri={song.uri}
          playing={playing === song.id}
          setPlaying={setPlaying}
          audioRef={audioRef}
        />
      ))}
    </div>
  );
}
