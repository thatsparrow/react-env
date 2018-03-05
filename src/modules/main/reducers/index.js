import * as ActionTypes from './../constants/actions'

const initialState = {
}

const mainReducer = (state = initialState, action) => {
	const { type, data } = action
	switch (type) {
		case ActionTypes.SUCCESS_FETCH_JOBS:
			return Object.assign({}, state, {
				jobDetails: data
			})
		default:
			return state
	}
}

export default mainReducer
