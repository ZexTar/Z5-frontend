const hc = {};
let compare = [];

hc.flipClicked = (state, id) => {
	let update = state;
	state.get('cards').map((el, i) => {
		if (el.get('id') === id) {
			update = state.setIn(['cards', i, 'flipped'], 'true');
		}

		return 0;
	});

	return update;
};

hc.flippedNumber = (state) => {
	let flippedCards = 0;
	state.get('cards').map((el) => {
		if (el.get('flipped') === 'true') {
			flippedCards += 1;
		}

		return 0;
	});

	return flippedCards;
};

hc.solveMatched = (state) => {
	let update = state;
	if (compare.length === 2 && compare[0] === compare[1]) {
		state.get('cards').map((el, i) => {
			if (el.get('genKey') === compare[0] && el.get('solved') === 'false') {
				update = update.setIn(['cards', i, 'solved'], 'true');
			}

			return 0;
		});
	}

	return update;
};

hc.hideUnmatched = (state) => {
	let update = state;
	if (hc.flippedNumber(state) === 2) {
		state.get('cards').map((el, i) => {
			update = update.setIn(['cards', i, 'flipped'], 'false');

			return 0;
		});
	}

	return update;
};

hc.shuffle = (state) => {
	const shuffled = Object.assign({}, state);
	const { cards } = shuffled;
	compare = [];

	for (let i = cards.length - 1; i > 0; i -= 1) {
		if (i !== 4 && i !== 9 && i !== 14) {
			const j = Math.floor(Math.random() * (i + 1));
			if (j !== 4 && j !== 9 && j !== 14) {
				[cards[i], cards[j]] = [cards[j], cards[i]];
			}
		}
	}

	return shuffled;
};

hc.update = (state, action) => {
	if (hc.flippedNumber(state) < 2) {
		if (compare.length < 2) {
			compare.push(action.genKey);
		}

		return hc.solveMatched(hc.flipClicked(state, action.id), compare);
	}

	if (hc.flippedNumber(state) === 2) {
		compare = [];

		if (compare.length < 2) {
			compare.push(action.genKey);
		}

		return hc.flipClicked(hc.hideUnmatched(state), action.id);
	}

	return state;
};

export default hc;
