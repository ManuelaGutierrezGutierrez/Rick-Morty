import { useEffect, useState } from "react";

const ApiCall = () => {
	const [characters, setCharacters] = useState([]);
	// let { info, results } = characters;

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((res) => res.json())
			.then((res) => setCharacters(res.results));
	}, []);

	return (
		<div>
			{characters.map((character) => (
				<div>
					<p>{character.name}</p>
					<img src={character.image} alt="Character"></img>
				</div>
			))}
		</div>
	);
};

export default ApiCall;
