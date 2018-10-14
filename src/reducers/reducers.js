import _ from 'lodash';
import { Map } from 'immutable';
import cards from '../data/cards';
import constants from '../constants/constants';
import hc from '../helper/handleClick';

const [FLIP_CARD, RESTART_GAME, CHANGE_ROUTE] = constants;
let compare = [];

const initialStateCards = { cards };

const update = (state = Map(initialStateCards), action = {}) => {
	const newState = _.cloneDeep(state.toJS());

	switch (action.type) {
	case FLIP_CARD:
		if (hc.flippedNumber(newState.cards) < 2) {
			if (compare.length < 2) {
				compare.push(action.genKey);
			}

			hc.flipClicked(newState.cards, action.id);
			hc.solveMatched(newState.cards, compare);

			return Map(newState);
		}

		if (hc.flippedNumber(newState.cards) === 2) {
			compare = [];

			hc.hideUnmatched(newState.cards);
			hc.flipClicked(newState.cards, action.id);

			if (compare.length < 2) {
				compare.push(action.genKey);
			}

			return Map(newState);
		}
		break;

	case RESTART_GAME:
		compare = [];
		hc.shuffle(initialStateCards.cards);

		return Map(initialStateCards);

	default:
		return state;
	}

	return state;
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
