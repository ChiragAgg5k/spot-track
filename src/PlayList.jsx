import { spotify } from "./App";
import { useDataLayerValue } from "./DataLayer";
import "./PlayList.css";

export default function PlayList({ playList }) {
	const [, dispatch] = useDataLayerValue();
	const playLists = document.querySelectorAll(".playList");
	const thisPlayList = document.getElementById(playList.id);

	return (
		<div
			id={playList.id}
			className={`playList`}
			onClick={() => {
				dispatch({
					type: "SET_SELECTED_PLAYLIST",
					selectedPlayList: playList
				});

				spotify.getPlaylistTracks(playList.id).then((_tracks) => {
					dispatch({
						type: "SET_TRACKS",
						tracks: _tracks
					});
				});

				playLists.forEach((playList) => {
					playList.classList.remove("selected");
				});

				thisPlayList?.classList.add("selected");
			}}>
			{playList.images[0] ? (
				<img src={playList.images[0]?.url} alt="" />
			) : (
				<img
					src="https://marketplace.canva.com/EAEdeiU-IeI/1/0/1600w/canva-purple-and-red-orange-tumblr-aesthetic-chill-acoustic-classical-lo-fi-playlist-cover-jGlDSM71rNM.jpg"
					alt=""
				/>
			)}
			<p>{playList.name}</p>
		</div>
	);
}
