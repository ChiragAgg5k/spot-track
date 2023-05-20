import './Login.css';
import spotify_logo from './assets/Spotify_Logo_CMYK_White.png';

export default function Login() {
    return (
        <div className='login'>
            <img src={spotify_logo} alt="Spotify Logo" id='spotify-logo' />
            <a className='not-selectable'>Login with Spotify</a>
        </div>
    );
}