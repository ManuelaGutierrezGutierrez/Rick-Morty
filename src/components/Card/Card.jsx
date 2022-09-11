const Card = ({ character }) => {
	return (
		<card className="card  justify-content-center border-primary ">
			<div className="card-body ">
				{/* <p>{character.id}</p> */}

				<h3 className="card-title card-header bg-primary">{character.name}</h3>
				<img
					src={character.image}
					className="img-fluid"
					alt="Character Rick & Morty"
				/>

				<p className="card-text text-secondary">{character.species}</p>
				<p className="card-text text-secondary">{character.status}</p>
			</div>
		</card>
	);
};

export default Card;
