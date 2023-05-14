/*Style import */
import "./assets/App.css";

/*Hooks imports*/
import { useState } from "react";

/*Compponents import */
import Animal from "./components/Animal";

function App() {
	/*States declaration */
	const [animals, setAnimals] = useState([]);

	/*States handler functions*/
	const getRandomAnimal = () => {
		const list = ["cat", "cow", "horse"];
		return list[Math.floor(Math.random() * list.length)];
	};

	/*Events handler functions */
	const handleClick = () => {
		setAnimals([...animals, getRandomAnimal()]);
	};

	/*Render data*/
	const animalRender = animals.map((animal, index) => {
		return <Animal type={animal} key={index} />;
	});

	return (
		<div className="app-container">
			<button className="add-button" onClick={handleClick}>
				Add animal
			</button>
			<div className="animal-list-container">{animalRender}</div>
		</div>
	);
}

export default App;
