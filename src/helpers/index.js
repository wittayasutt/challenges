export const summaryDonations = danations => {
	return danations.reduce(
		(accumulator, value) => accumulator + (value ? value : 0)
	)
}

export const toCurrency = amount => {
	return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
