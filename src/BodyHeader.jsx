import './BodyHeader.css';
import { useDataLayerValue } from './DataLayer';

export default function BodyHeader() {

    const default_playlist_icon = "https://marketplace.canva.com/EAEdeiU-IeI/1/0/1600w/canva-purple-and-red-orange-tumblr-aesthetic-chill-acoustic-classical-lo-fi-playlist-cover-jGlDSM71rNM.jpg";

    const [{ selectedPlayList }] = useDataLayerValue();
    var title = (selectedPlayList?.name) ? selectedPlayList.name : "Playlist";
    var owner = (selectedPlayList?.owner) ? selectedPlayList.owner.display_name : "No owner";
    var image = (selectedPlayList?.images) ? selectedPlayList.images[0].url : default_playlist_icon;


    return (
        <div className="playlist_header">

            <div className="top_row">
                <span>
                    <i className="fa-solid fa-arrow-left"></i>
                    <i className="fa-solid fa-arrow-right"></i>
                </span>
                <div className="right_container">
                    <a className="redirect" href='https://github.com/ChiragAgg5k/spot-clone' target='_blank' rel="noreferrer">
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
                    </div>
                </div>
            </div>

        </div>
    )
}
