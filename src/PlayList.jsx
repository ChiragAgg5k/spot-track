import { spotify } from './App';
import { useDataLayerValue } from './DataLayer';
import './PlayList.css';

export default function PlayList({ playList }) {

    const [, dispatch] = useDataLayerValue();

    return (
        <div className="playList" onClick={
            () => {
                dispatch({
                    type: "SET_SELECTED_PLAYLIST",
                    selectedPlayList: playList,
                })

                spotify.getPlaylistTracks(playList.id).then((tracks) => {
                    dispatch({
                        type: "SET_TRACKS",
                        tracks: tracks,
                    })
                }
                )
            }
        }>
            <img src={playList.images[0].url} alt="" />
            <p>{playList.name}</p>
        </div>
    )
}