import { spotify } from "./App";
import { useDataLayerValue } from "./DataLayer";
import "./PlayList.css";

export default function PlayList({ playList }) {
	const [, dispatch] = useDataLayerValue();
	const playLists = document.querySelectorAll(".playList");

	// let mounted = false;
	// useEffect(() => {
	// 	if (!mounted) {
	// 		thisPlayList = document.getElementById(playList.id);
	// 		mounted = true;
	// 	}
	// }, [playLists]);

	function select() {
		playLists.forEach((playList) => {
			playList.classList.remove("selected");
		});
		document.getElementById(playList.id).classList.add("selected");
	}

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

				select();
			}}>
			{playList.images[0] ? (
				<img src={playList.images[0]?.url} alt="" />
			) : (
				<img
					src="https://marketplace.canva.com/EAEdeiU-IeI/1/0/1600w/canva-purple-and-red-orange-tumblr-aesthetic-chill-acoustic-classical-lo-fi-playlist-cover-jGlDSM71rNM.jpg"
					alt=""
				/>
			)}
			<div className="playlist__details">
				<h4>{playList.name}</h4>
				<p>
					{playList.owner.display_name}{" "}
					{playList.tracks.total === 1
						? "• 1 song"
						: `• ${playList.tracks.total} songs`}
				</p>
			</div>
		</div>
	);
}
