import "./Card.scss";

const Card = ({ character }) => {
	return (
		<div className="card">
			
				{/* <p>{character.id}</p> */}
			<img
				src={character.image}
				className="card__img"
				alt="Character Rick & Morty"
			/>
			<h3 className="card__title">{character.name}</h3>
			<div className="card__container">
				<p className="card__text">{character.species}</p>
				<p className="card__text">{character.status}</p>
			</div>
		</div>
	);
};

export default Card;
