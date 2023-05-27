import './Body.css';

export default function Body() {

    return (
        <div className="body">

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
                    <img src="https://marketplace.canva.com/EAEdeiU-IeI/1/0/1600w/canva-purple-and-red-orange-tumblr-aesthetic-chill-acoustic-classical-lo-fi-playlist-cover-jGlDSM71rNM.jpg" alt="" />
                    <div className="playlist_text">
                        <h4>Playlist</h4>
                        <h1>Playlist Name</h1>
                        <div className="info">
                            <p>Owner name</p>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}