import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './DataLayer';
import Hompage from './HomePage';
import Login from './Login';
import { getTokenFromURL } from './login_logic';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      console.log(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {

        // dispatching the action to the reducer
        dispatch({
          type: "SET_USER",
          user: user,
        })

      });

      spotify.getUserPlaylists().then((playLists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playLists: playLists,
        })
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='app'>

      {
        token ? (
          <Hompage spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App
