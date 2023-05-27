import { useState } from 'react';
import './Footer.css';

function Footer() {

    const [volume, setVolume] = useState(0);

    return (
        <div className="footer">
            <div className="footer__left">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rap-mixtape-cover-art-design-template-ca79baae8c3ee8f1112ae28f7bfaa1e0_screen.jpg?ts=1635176249" alt="" />
                <div className="song">
                    <h1>Song Name</h1>
                    <h2>Artist Name</h2>
                </div>
                <i className="fa-regular fa-heart"></i>
            </div>

            <div className="footer__center">
                <i className="fa-solid fa-shuffle"></i>
                <i className="fa-solid fa-backward-step"></i>
                <i className="fa-solid fa-circle-play"></i>
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
                    onChange={event => {
                        setVolume(event.target.valueAsNumber)
                    }}
                />
            </div>
        </div>
    )
}

export default Footer