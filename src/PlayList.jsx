import './PlayList.css';

export default function PlayList({ title, img }) {
    return (
        <div className="playList">
            <img src={img.url} alt="" />
            <p>{title}</p>
        </div>
    )
}