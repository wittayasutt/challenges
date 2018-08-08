export const donateReducer = (state = 0, action) => {
	switch (action.type) {
		case 'UPDATE_TOTAL_DONATE': {
			return state + action.amount
		}
		default:
			return state
	}
}

export const messageReducer = (state = '', action) => {
	switch (action.type) {
		case 'UPDATE_MESSAGE': {
			return action.message
		}
		default:
			return state
	}
}
