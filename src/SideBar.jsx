import { useDataLayerValue } from './DataLayer';
import PlayList from './PlayList';
import './SideBar.css';

export default function SideBar() {

    const [{ playLists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <div className="row" onClick={
                    () => {
                        dispatch({
                            type: "SET_SELECTED_PLAYLIST",
                            selectedPlayList: null,
                        })
                        dispatch({
                            type: "SET_TRACKS",
                            tracks: [],
                        })
                    }
                }>
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>
                </div>
                <div className="row">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <p>Search</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <h2>Your playlists</h2>
                {playLists?.items?.map((p) => {
                    return <PlayList key={p.id} playList={p} />
                })}
            </div>
        </div>
    )
}