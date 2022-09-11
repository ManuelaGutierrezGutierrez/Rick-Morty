const Card = ({ character }) => {
	return (
		<div>
			<p>{character.name}</p>
			<img src={character.image} alt="Character Rick & Morty" />
			<p>{character.species}</p>
			<p>{character.status}</p>
		</div>
	);
};

export default Card;
