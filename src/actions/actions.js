import actionTypes from '../constants/actiontypes';

const { FLIP_CARD, RESTART_GAME, CHANGE_ROUTE } = actionTypes;

export default {
	flipCard: (id, genKey) => ({
		type: FLIP_CARD,
		id,
		genKey,
	}),

	restart: () => ({
		type: RESTART_GAME,
	}),

	routeChange: text => ({
		type: CHANGE_ROUTE,
		payload: text,
	}),
};
