import { ACTION_TYPES } from "../actions/postMessage";

const initialState = {
	list: [],
};

export const postMessage = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.FETCH_ALL:
			return {
				...state,
				list: [...action.payload],
			};

		default:
			return state;
	}
};
