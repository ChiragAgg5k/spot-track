import { useState } from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faForwardStep,
	faRepeat,
	faHeart,
	faBackwardStep,
	faShuffle,
	faVolumeHigh,
	faCirclePlay,
	faCirclePause
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
	const [volume, setVolume] = useState(0.5);
	const [{ currentlyPlaying, playing }, dispatch] = useDataLayerValue();

	return (
		<div className="footer">
			<div className="footer__left">
				{currentlyPlaying.name ? (
					<>
						<img src={currentlyPlaying.albumcover} alt="" />
						<div className="song">
							<h1>{currentlyPlaying.name}</h1>
							<h2>{currentlyPlaying.artist}</h2>
						</div>
					</>
				) : (
					<>
						<img src="./Spotify_logo_without_text.svg" alt="" />
						<div className="song">
							<h1>Song Name</h1>
							<h2>Artist Name</h2>
						</div>
					</>
				)}
				<FontAwesomeIcon icon={faHeart} id="icon" />
			</div>

			<div className="footer__center">
				<FontAwesomeIcon icon={faShuffle} id="icon" />
				<FontAwesomeIcon icon={faBackwardStep} id="icon" />

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

				<FontAwesomeIcon icon={faForwardStep} id="icon" />
				<FontAwesomeIcon icon={faRepeat} id="icon" />
			</div>

			<div className="footer__right">
				<FontAwesomeIcon icon={faVolumeHigh} id="icon" />
				<input
					type="range"
					min={0}
					max={1}
					step={0.02}
					value={volume}
					onChange={(event) => {
						dispatch({
							type: "SET_VOLUME",
							volume: event.target.value
						});
						setVolume(event.target.value);
					}}
				/>
			</div>
		</div>
	);
}

export default Footer;
