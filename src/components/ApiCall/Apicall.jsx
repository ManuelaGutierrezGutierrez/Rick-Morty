import { useEffect, useState } from "react";
import Card from "../Card/Card";

import React from "react";

const Apicall = () => {
	const [characters, setCharacters] = useState([]);
	const [info, setInfo] = useState({});

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((res) => res.json())
			.then((res) => {
				setCharacters(res.results);
				setInfo(res.info);
			});
	}, []);

	return (
		<div className="apicall">
			<h1>Personajes</h1>

			{characters.map((character) => (
				<Card key={character.id} character={character} />
			))}

			<div className="btn-group">
				{info.prev && <button>Anterior</button>}
				{info.next && <button>Siguiente</button>}
			</div>
		</div>
	);
};

export default Apicall;
