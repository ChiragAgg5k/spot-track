import "./BodyHeader.css";
import { useDataLayerValue } from "./DataLayer";

export default function BodyHeader() {
	const default_playlist_icon =
		"https://marketplace.canva.com/EAEdeiU-IeI/1/0/1600w/canva-purple-and-red-orange-tumblr-aesthetic-chill-acoustic-classical-lo-fi-playlist-cover-jGlDSM71rNM.jpg";

	const [{ selectedPlayList, tracks }] = useDataLayerValue();
	let title = selectedPlayList?.name ? selectedPlayList.name : "Playlist";
	let owner = selectedPlayList?.owner
		? selectedPlayList.owner.display_name
		: "No owner";
	let numberOfSongs = selectedPlayList?.tracks
		? selectedPlayList.tracks.total
		: 0;
	let totalDuration = tracks?.items
		? tracks.items.reduce((acc, item) => acc + item.track.duration_ms, 0)
		: 0;
	let image = selectedPlayList?.images
		? selectedPlayList.images[0]
			? selectedPlayList.images[0].url
			: default_playlist_icon
		: default_playlist_icon;

	let totalDurationInHours = Math.floor(totalDuration / 3600000);
	let leftOutDurationInMinutes = Math.floor(
		(totalDuration % 3600000) / 60000
	);

	let finalDuration =
		totalDurationInHours > 0
			? totalDurationInHours + " hr " + leftOutDurationInMinutes + " min"
			: leftOutDurationInMinutes + " min";

	return (
		<div className="playlist_header">
			<div className="top_row">
				<span>
					<i className="fa-solid fa-arrow-left"></i>
					<i className="fa-solid fa-arrow-right"></i>
				</span>
				<div className="right_container">
					<a
						className="redirect"
						href="https://github.com/ChiragAgg5k/spot-clone"
						target="_blank"
						rel="noreferrer">
						<h3>Github</h3>
						<i className="fa-solid fa-arrow-right"></i>
					</a>
					<i className="fa-solid fa-user"></i>
				</div>
			</div>

			<div className="playlist">
				<img src={image} alt="" />
				<div className="playlist_text">
					<h4>Playlist</h4>
					<h1>{title}</h1>
					<div className="info">
						<p>{owner}</p>
						<p>·</p>
						<p>{numberOfSongs} songs</p>
						<p id="duration_dot">·</p>
						<p id="duration">about {finalDuration}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
