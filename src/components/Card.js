import React from 'react';
import PropTypes from 'prop-types';

const img1 = 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/d/df/Card_back-Ragnaros.png?version=58a5ef605a105d350b1e8d4da1873ac8';
const img2 = 'https://cdn.shopify.com/s/files/1/0405/8713/products/light_blue_-_prisma_grande.jpg?v=1420163357';

const Card = (props) => {
	const {
		flipCard,
		clicking,
		id,
		genKey,
		flipped,
		solved,
	} = props;


	if (solved === 'true') {
		return (
			<div className="tc grow bg-light-green br3 pa1 ma2 dib bw2 shadow-5" role="presentation">
				<img alt="robots" height="150" width="200" src={img2} />
			</div>
		);
	}

	if (flipped === 'false') {
		return (
			<div onClick={() => { flipCard(id, genKey); clicking(); }} className="tc grow bg-light-green br3 pa1 ma2 dib bw2 shadow-5" role="presentation">
				<img alt="robots" height="150" width="200" src={img1} />
			</div>
		);
	}

	return (
		<div className="tc grow bg-light-green br3 pa1 ma2 dib bw2 shadow-5" role="presentation">
			<img alt="robots" height="150" width="200" src={`https://robohash.org/${genKey}?size=200x200`} />
		</div>
	);
};

Card.propTypes = {
	flipCard: PropTypes.func.isRequired,
	clicking: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	genKey: PropTypes.number.isRequired,
	flipped: PropTypes.string.isRequired,
	solved: PropTypes.string.isRequired,
};

export default Card;
