import spotify_logo from "./assets/Spotify_Logo_CMYK_White.png";
import "./Login.css";
import { loginURL } from "./login_logic";

export default function Login() {
	return (
		<div className="login">
			<img src={spotify_logo} alt="Spotify Logo" id="spotify-logo" />
			<div></div>
			<a href={loginURL} className="not-selectable">
				Login with Spotify
			</a>
		</div>
	);
}
