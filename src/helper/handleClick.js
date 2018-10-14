const hc = {};

hc.flipClicked = (arr, id) => {
	arr.forEach((el) => {
		if (el.id === id) {
			el.flipped = 'true';
		}
	});
};

hc.flippedNumber = (arr) => {
	let flippedCards = 0;
	arr.forEach((el) => {
		if (el.flipped === 'true') {
			flippedCards += 1;
		}
	});

	return flippedCards;
};

hc.solveMatched = (arr, compare) => {
	if (compare.length === 2 && compare[0] === compare[1]) {
		arr.forEach((el) => {
			if (el.genKey === compare[0]) {
				el.solved = 'true';
			}
		});
	}
};

hc.hideUnmatched = (arr) => {
	if (hc.flippedNumber(arr) === 2) {
		arr.forEach((el) => {
			el.flipped = 'false';
		});
	}

	return arr;
};

hc.shuffle = (cards) => {
	for (let i = cards.length - 1; i > 0; i -= 1) {
		if (i !== 4 && i !== 9 && i !== 14) {
			const j = Math.floor(Math.random() * (i + 1));
			if (j !== 4 && j !== 9 && j !== 14) {
				[cards[i], cards[j]] = [cards[j], cards[i]];
			}
		}
	}

	return cards;
};

export default hc;
