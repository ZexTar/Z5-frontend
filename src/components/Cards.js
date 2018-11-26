import React from 'react';
import PropTypes from 'prop-types';

const img1 = 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/d/df/Card_back-Ragnaros.png?version=58a5ef605a105d350b1e8d4da1873ac8';
const img2 = 'https://cdn.shopify.com/s/files/1/0405/8713/products/light_blue_-_prisma_grande.jpg?v=1420163357';

const Cards = ({
	flipCard,
	hideUnmatched,
	solveMatched,
	cards,
	clicking,
	routeChange,
}) => {
	const flippedNumber = () => {
		let flippedCards = 0;
		cards.map((el) => {
			if (el.get('flipped') === 'true') {
				flippedCards += 1;
			}

			return 0;
		});

		return flippedCards;
	};
	const isGameSolved = () => {
		let solvedNum = 0;
		cards.forEach((card) => {
			if (card.get('solved') === 'true') {
				solvedNum += 1;
			}
		});
		if (solvedNum > 14) {
			routeChange('updatescore');
		}
	};

	const cardArr = cards.map((card, i) => {
		if (i === 4 || i === 9 || i === 14) {
			return <div key={card.get('id')} />;
		}

		if (card.get('solved') === 'true') {
			return (
				<div key={card.get('id')} className="tc grow bg-light-green br3 pa1 ma2 dib bw2 shadow-5" role="presentation">
					<img alt="robots" height="150" width="200" src={img2} />
				</div>
			);
		}

		if (card.get('flipped') === 'false') {
			return (
				<div
					key={card.get('id')}
					onClick={() => {
						if (flippedNumber() === 2) {
							hideUnmatched();
						}
						flipCard(card.get('id'), card.get('genKey'));
						solveMatched();
						clicking();
					}}
					className="tc grow bg-light-green br3 pa1 ma2 dib bw2 shadow-5"
					role="presentation"
				>
					<img alt="robots" height="150" width="200" src={img1} />
				</div>
			);
		}

		return (
			<div key={card.get('id')} className="tc grow bg-light-green br3 pa1 ma2 dib bw2 shadow-5" role="presentation">
				<img alt="robots" height="150" width="200" src={`https://robohash.org/${card.get('genKey')}?size=200x200`} />
			</div>
		);
	});

	return (
		<div onClick={() => isGameSolved()} role="presentation">
			{cardArr}
		</div>
	);
};

Cards.propTypes = {
	flipCard: PropTypes.func.isRequired,
	cards: PropTypes.shape({
		id: PropTypes.number,
		genKey: PropTypes.number,
		flipped: PropTypes.string,
		solved: PropTypes.string,
	}).isRequired,
	hideUnmatched: PropTypes.func.isRequired,
	solveMatched: PropTypes.func.isRequired,
	clicking: PropTypes.func.isRequired,
	routeChange: PropTypes.func.isRequired,
};

export default Cards;
