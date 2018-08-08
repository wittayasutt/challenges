export const donateReducer = (state = 120, action) => {
	switch (action.type) {
		case 'UPDATE_TOTAL_DONATE': {
			return state + action.donate
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
