import { useEffect } from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./HomePage.css";
import SideBar from "./SideBar";
import { useDataLayerValue } from "./DataLayer";

function Hompage() {
	const [{ item }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const handleSpaceBar = async (event) => {
			if (event.code === "Space" && event.target === document.body) {
				event.preventDefault();

				if (item.paused) {
					try {
						await item.play();
						dispatch({
							type: "SET_PLAYING",
							playing: true
						});
					} catch (err) {
						return;
					}
				} else {
					try {
						await item.pause();
						dispatch({
							type: "SET_PLAYING",
							playing: false
						});
					} catch (err) {
						return;
					}
				}
			}
		};

		document.addEventListener("keydown", handleSpaceBar, false);

		return () => {
			document.removeEventListener("keydown", handleSpaceBar, false);
		};
	}, [dispatch, item]);

	return (
		<div className="homepage">
			<div className="homepage__body">
				<SideBar />
				<Body />
			</div>
			<Footer />
		</div>
	);
}

export default Hompage;
