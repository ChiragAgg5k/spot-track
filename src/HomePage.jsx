import Body from "./Body";
import Footer from "./Footer";
import './HomePage.css';
import SideBar from "./SideBar";

function Hompage() {
    return (
        <div className="homepage">
            <div className="homepage__body">
                <SideBar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Hompage;