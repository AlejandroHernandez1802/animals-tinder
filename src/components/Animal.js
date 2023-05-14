/*Style import */
import "../assets/components/Animal.css";

/*Images imports*/
import HorseImage from "../svg/horse.svg";
import CatImage from "../svg/cat.svg";
import AlligatorImage from "../svg/gator.svg";
import CowImage from "../svg/cow.svg";
import HeartImage from "../svg/heart.svg";

/*State imports */
import { useState } from "react";

/*Images map*/
const animalsImagesMap = {
	horse: HorseImage,
	cat: CatImage,
	gator: AlligatorImage,
	cow: CowImage,
};

function Animal({ type }) {
	/*States declaration */
	const [clicks, setClicks] = useState(0);

	/*Events handler functions */
	const handleClick = () => {
		setClicks(clicks + 1);
	};

	return (
		<div onClick={handleClick} className="animal-container">
			<img className="animal-image" src={animalsImagesMap[type]} alt="animal" />
			<img
				className="heart"
				src={HeartImage}
				alt="Heart"
				style={{ width: 10 + 10 * clicks + "px" }}
			/>
		</div>
	);
}

export default Animal;
