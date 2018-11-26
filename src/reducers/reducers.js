import { fromJS } from 'immutable';
import cards from '../data/cards';
import actionTypes from '../constants/actiontypes';

const {
	FLIP_CARD,
	HIDE_UNMATCHED,
	SOLVE_MATCHED,
	RESTART_GAME,
	CHANGE_ROUTE,
} = actionTypes;

const initialState = {
	cards,
	guess1: null,
	guess2: null,
};

const update = (state = fromJS(initialState), action = {}) => {
	switch (action.type) {
	case FLIP_CARD:
		let nextStateFlip = state;
		nextStateFlip.get('cards').forEach((el, i) => {
			if (el.get('id') === action.id) {
				nextStateFlip = state.setIn(['cards', i, 'flipped'], 'true');
			}

			return 0;
		});
		if (nextStateFlip.get('guess1') === null) {
			return nextStateFlip.set('guess1', action.genKey);
		}
		return nextStateFlip.set('guess2', action.genKey);

	case HIDE_UNMATCHED:
		let nextStateHide = state;
		nextStateHide.get('cards').forEach((el, i) => {
			nextStateHide = nextStateHide.setIn(['cards', i, 'flipped'], 'false');
			return 0;
		});
		return nextStateHide.set('guess1', null).set('guess2', null);

	case SOLVE_MATCHED:
		let nextStateMatched = state;
		if (nextStateMatched.get('guess1') === nextStateMatched.get('guess2') && nextStateMatched.get('guess1') !== null) {
			nextStateMatched.get('cards').map((el, i) => {
				if (el.get('genKey') === nextStateMatched.get('guess1') && el.get('solved') === 'false') {
					nextStateMatched = nextStateMatched.setIn(['cards', i, 'solved'], 'true');
				}

				return 0;
			});
		}

		return nextStateMatched;

	case RESTART_GAME:
		const shuffled = Object.assign({}, initialState);

		for (let i = shuffled.cards.length - 1; i > 0; i -= 1) {
			if (i !== 4 && i !== 9 && i !== 14) {
				const j = Math.floor(Math.random() * (i + 1));
				if (j !== 4 && j !== 9 && j !== 14) {
					[shuffled.cards[i], shuffled.cards[j]] = [shuffled.cards[j], shuffled.cards[i]];
				}
			}
		}
		return fromJS(shuffled);

	default:
		return state;
	}
};

const initialStateRoute = 'signin';

const route = (state = initialStateRoute, action = {}) => {
	switch (action.type) {
	case CHANGE_ROUTE:
		return action.payload;
	default:
		return state;
	}
};

export default [update, route];
