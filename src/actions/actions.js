import actionTypes from '../constants/actiontypes';

const {
	FLIP_CARD,
	HIDE_UNMATCHED,
	SOLVE_MATCHED,
	RESTART_GAME,
	CHANGE_ROUTE,
} = actionTypes;

export default {
	flipCard: (id, genKey) => ({
		type: FLIP_CARD,
		id,
		genKey,
	}),

	hideUnmatched: () => ({
		type: HIDE_UNMATCHED,
	}),

	solveMatched: () => ({
		type: SOLVE_MATCHED,
	}),

	restart: () => ({
		type: RESTART_GAME,
	}),

	routeChange: text => ({
		type: CHANGE_ROUTE,
		payload: text,
	}),
};
