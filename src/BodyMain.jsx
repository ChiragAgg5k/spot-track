import './BodyMain.css';
import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow';

export default function BodyMain() {

    const [{ tracks }] = useDataLayerValue();

    return (
        <div className="body_main">
            <div className="play-pause_row">
                <i className="fa-sharp fa-solid fa-circle-play"></i>
                <p>...</p>
            </div>

            <div className="column_headers">
                <p>#</p>
                <p>Title</p>
                <p id="album">Album</p>
                <p id='dateAdded'>Date Added</p>
                <i className="fa-solid fa-clock"></i>
            </div>
            <div className="divider"></div>

            <div className="songs">
                {
                    tracks?.items?.map((item, index) => (
                        <SongRow key={index} sno={index} track={item.track} added_at={item.added_at} />
                    ))
                }
            </div>

            <div className="empty_space"></div>

        </div>
    )
}
