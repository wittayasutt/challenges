import { summaryDonations, toCurrency } from '../helpers'

describe('helpers', function() {
	test('`summaryDonations` should calculate donations correctly', function() {
		expect(summaryDonations([1, 2, 3, 4])).toEqual(10)
	})

	test('`toCurrency` should change number to currency', function() {
		expect(toCurrency(1234567)).toEqual('1,234,567')
	})
})
