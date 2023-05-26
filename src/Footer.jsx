import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <p>Album and song details</p>
            </div>

            <div className="footer__center">
                <i className="fa-solid fa-shuffle"></i>
                <i className="fa-solid fa-backward-step"></i>
                <i className="fa-solid fa-circle-play"></i>
                <i className="fa-solid fa-forward-step"></i>
                <i className="fa-solid fa-repeat"></i>
            </div>

            <div className="footer__right">
                <p>Volume controls</p>
            </div>
        </div>
    )
}

export default Footer