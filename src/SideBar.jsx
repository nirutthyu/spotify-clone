
import SideBarOption from "./SideBarOption";
import { useDataLayerValue } from "./Datalayer";
import { AiOutlineHome } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
export default function SideBar() {
  const [{ playlists}] = useDataLayerValue();
  return (
    <div className="d-flex flex-column mt-2">
      <div className="container d-flex flex-column sideBaropt">
        <SideBarOption title="Home" Icon={AiOutlineHome} />
        <SideBarOption title="Search" Icon={FaSearch} />
      </div>

      <div className="container-fluid d-flex flex-column sideBaropt">
        <SideBarOption  title="Your Library" Icon={BiLibrary} />
        <strong>PLAYLISTS</strong>

        {playlists?.items?.map(({ id, name, images,owner }) => {
          return (
            <SideBarOption id="playlistButton"key={id} id={id} title={name} owner={owner.display_name}src={images[0]?.url} />
          );
        })}
      </div>
    </div>
  );
}
