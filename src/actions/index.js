export const updateTotalDonate = amount => dispatch => {
	return dispatch({
		type: 'UPDATE_TOTAL_DONATE',
		amount
	})
}

export const updateMessage = message => dispatch => {
	return dispatch({
		type: 'UPDATE_MESSAGE',
		message
	})
}
