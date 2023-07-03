import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BodyMain.css";
import { useDataLayerValue } from "./DataLayer";
import SongRow from "./SongRow";
import {
	faCirclePause,
	faCirclePlay,
	faClock
} from "@fortawesome/free-solid-svg-icons";

export default function BodyMain() {
	const [{ tracks, playing, selectedPlayList, followedArtists }, dispatch] =
		useDataLayerValue();

	return (
		<div className="body_main">
			{selectedPlayList ? (
				<>
					<div className="play-pause_row">
						{playing ? (
							<FontAwesomeIcon
								icon={faCirclePause}
								id="icon"
								onClick={() => {
									dispatch({
										type: "SET_PLAYING",
										playing: false
									});
								}}
							/>
						) : (
							<FontAwesomeIcon
								icon={faCirclePlay}
								id="icon"
								onClick={() => {
									dispatch({
										type: "SET_PLAYING",
										playing: true
									});
								}}
							/>
						)}
						<p>...</p>
					</div>

					<div className="column_headers">
						<p>#</p>
						<p>Title</p>
						<p id="album">Album</p>
						<p id="dateAdded">Date Added</p>
						<FontAwesomeIcon icon={faClock} id="icon" />
					</div>
					<div className="divider"></div>

					<div className="songs">
						{tracks?.items?.map((item, index) => (
							<SongRow
								key={index}
								sno={index}
								track={item.track}
								added_at={item.added_at}
							/>
						))}
					</div>

					<div className="empty_space"></div>
				</>
			) : (
				<>
					<h3 className="artist__header">Your top Artists</h3>
					<div className="artists">
						{followedArtists?.items?.map(
							(item, index) =>
								index < 10 && (
									<div key={index} className="artist">
										<img
											src={item.images[0].url}
											alt={item.name}
											className="artist_image"
										/>
										<p
											style={{
												marginTop: "4px"
											}}>
											{item.name}
										</p>
									</div>
								)
						)}
					</div>
					<div className="empty_space"></div>
				</>
			)}
		</div>
	);
}
