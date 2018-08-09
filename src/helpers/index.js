export const summaryDonations = danations => {
	return danations.reduce(
		(accumulator, value) => accumulator + (value ? value : 0)
	)
}

export const toCurrency = amount => {
	return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}
