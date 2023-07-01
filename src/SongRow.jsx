import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDataLayerValue } from "./DataLayer";
import "./SongRow.css";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function SongRow({ sno, track, added_at }) {
	const duration = msToMinutes(track.duration_ms);
	const dateAdded = howLongAgoInWeeks(added_at);
	const [{ item }, dispatch] = useDataLayerValue();

	function msToMinutes(ms) {
		let minutes = Math.floor(ms / 60000);
		let seconds = ((ms % 60000) / 1000).toFixed(0);
		return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
	}

	function howLongAgoInWeeks(added_at) {
		const dateAdded = new Date(added_at);
		const dateNow = new Date();
		const diffTime = Math.abs(dateNow - dateAdded);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		const diffWeeks = Math.ceil(diffDays / 7);

		if (diffWeeks === 0) {
			return "This week";
		}

		if (diffWeeks < 5) {
			return `${diffWeeks} weeks ago`;
		}

		// return month date, year
		const month = dateAdded.toLocaleString("default", { month: "short" });
		const date = dateAdded.getDate();
		const year = dateAdded.getFullYear();

		return `${month} ${date}, ${year}`;
	}

	return (
		<div
			className="song_row"
			onClick={() => {
				if (track.preview_url === null) {
					dispatch({
						type: "SET_CURRENTLY_PLAYING",
						currentlyPlaying: {
							name: "No Preview Available",
							artist: track.artists[0].name,
							albumcover: track.album.images[0].url
						}
					});
					return;
				}

				if (item.src === track.preview_url) {
					if (item.paused) {
						item.play();
						dispatch({
							type: "SET_PLAYING",
							playing: true
						});
					} else {
						item.pause();
						dispatch({
							type: "SET_PLAYING",
							playing: false
						});
					}
					return;
				}

				item.pause();
				item.src = track.preview_url;
				item.play();
				dispatch({
					type: "SET_CURRENTLY_PLAYING",
					currentlyPlaying: {
						name: track.name,
						artist: track.artists[0].name,
						albumcover: track.album.images[0].url
					}
				});
				dispatch({
					type: "SET_PLAYING",
					playing: true
				});
			}}>
			<p id="index">{sno + 1}</p>
			{track.preview_url !== null &&
			item.src === track.preview_url &&
			item.paused === false ? (
				<FontAwesomeIcon icon={faPause} id="icon" />
			) : (
				<FontAwesomeIcon icon={faPlay} id="icon" />
			)}
			<div className="song_name">
				<img src={track.album.images[0].url} alt="" />
				<p>{track.name}</p>
			</div>
			<p id="album">{track.album.name}</p>
			<p id="dateAdded">{dateAdded}</p>
			<p>{duration}</p>
		</div>
	);
}
