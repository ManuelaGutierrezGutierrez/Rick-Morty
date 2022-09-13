import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Apicall.scss";
import React from "react";
import "./Apicall.scss";

const Apicall = () => {
	const [characters, setCharacters] = useState([]);
	const [info, setInfo] = useState({});
	const [search, setSearch] = useState("")

	const getCharacters = (url = "https://rickandmortyapi.com/api/character") => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setCharacters(res.results);
				setInfo(res.info);
			});
	};

	useEffect(() => {
		getCharacters();
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
		results()
	}



	const results = (url = `https://rickandmortyapi.com/api/character/?name=${search}`) => {
		fetch(url)
		.then((res) => res.json())
		.then((res) => {
			setCharacters(res.results);
			setInfo(res.info);
		});
	}

	

	return (
		<div className="apicall">
		<div className="apicall__search-container"><input type="text" value={search} onChange={handleChange} placeholder="Search" className="apicall__search-bar"></input></div>
		
			<div className="apicall__container">
				{characters.map((character) => (
					<Card key={character.id} character={character} />
				))}
			</div>
			<div className="apicall__btn-group">
				{info.prev && (
					<button onClick={() => getCharacters(info.prev)}>Previous</button>
				)}
				{info.next && (
					<button onClick={() => getCharacters(info.next)}>Next</button>
				)}
			</div>
		</div>
	);
};

export default Apicall
