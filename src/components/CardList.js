import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = (props) => {
	const {
		flipCard,
		cards,
		clicking,
		routeChange,
	} = props;
	const isGameSolved = () => {
		let solvedNum = 0;
		cards.forEach((card) => {
			if (card.solved === 'true') {
				solvedNum += 1;
			}
		});
		if (solvedNum > 14) {
			routeChange('updatescore');
		}
	};
	const cardArr = cards.map((user, i) => {
		if (i === 4 || i === 9 || i === 14) {
			return <div key={cards[i].id} />;
		}

		return (
			<Card
				flipCard={flipCard}
				clicking={clicking}
				key={cards[i].id}
				id={cards[i].id}
				genKey={cards[i].genKey}
				flipped={cards[i].flipped}
				solved={cards[i].solved}
			/>
		);
	});

	return (
		<div onClick={() => isGameSolved()} role="presentation">
			{cardArr}
		</div>
	);
};

CardList.propTypes = {
	flipCard: PropTypes.func.isRequired,
	cards: PropTypes.arrayOf(PropTypes.object).isRequired,
	clicking: PropTypes.func.isRequired,
	routeChange: PropTypes.func.isRequired,
};

export default CardList;
