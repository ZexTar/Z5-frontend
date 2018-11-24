import { fromJS } from 'immutable';
import cards from '../data/cards';
import actionTypes from '../constants/actiontypes';
import hc from '../helper/handleClick';

const { FLIP_CARD, RESTART_GAME, CHANGE_ROUTE } = actionTypes;
const initialState = { cards };

const update = (state = fromJS(initialState), action = {}) => {
	switch (action.type) {
	case FLIP_CARD:
		return hc.update(state, action);
	case RESTART_GAME:
		return fromJS(hc.shuffle(initialState));

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
