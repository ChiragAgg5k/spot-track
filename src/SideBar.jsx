import { useDataLayerValue } from "./DataLayer";
import PlayList from "./PlayList";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
	const [{ playLists }, dispatch] = useDataLayerValue();
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<div
					className="row"
					onClick={() => {
						dispatch({
							type: "SET_SELECTED_PLAYLIST",
							selectedPlayList: null
						});
						dispatch({
							type: "SET_TRACKS",
							tracks: []
						});
					}}>
					<FontAwesomeIcon icon={faHouse} id="icon" />
					<p>Home</p>
				</div>
				<div className="row">
					<FontAwesomeIcon icon={faMagnifyingGlass} id="icon" />
					<p>Search</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<h2>Your playlists</h2>
				{playLists?.items?.map((p) => {
					return <PlayList key={p.id} playList={p} />;
				})}
			</div>
		</div>
	);
}
