import { useEffect } from "react";

const ApiCall = () => {
	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((res) => res.json())
			.then((res) => console.log(res));
	}, []);

	return <div></div>;
};

export default ApiCall;
