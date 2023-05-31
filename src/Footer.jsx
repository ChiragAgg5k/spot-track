import { useState } from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Footer.css";

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
						<img
							src="https://marketplace.canva.com/EAEdeiU-IeI/1/0/1600w/canva-purple-and-red-orange-tumblr-aesthetic-chill-acoustic-classical-lo-fi-playlist-cover-jGlDSM71rNM.jpg"
							alt=""
						/>
						<div className="song">
							<h1>Song Name</h1>
							<h2>Artist Name</h2>
						</div>
					</>
				)}
				<i className="fa-regular fa-heart"></i>
			</div>

			<div className="footer__center">
				<i className="fa-solid fa-shuffle"></i>
				<i className="fa-solid fa-backward-step"></i>

				{playing ? (
					<i
						className="fa-solid fa-circle-pause"
						onClick={() => {
							dispatch({
								type: "SET_PLAYING",
								playing: false
							});
						}}></i>
				) : (
					<i
						className="fa-solid fa-circle-play"
						onClick={() => {
							dispatch({
								type: "SET_PLAYING",
								playing: true
							});
						}}></i>
				)}

				<i className="fa-solid fa-forward-step"></i>
				<i className="fa-solid fa-repeat"></i>
			</div>

			<div className="footer__right">
				<i className="fa-solid fa-volume-high"></i>
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
