import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'

import { summaryDonations } from './helpers'

import Title from './components/title'

const Card = styled.div`
	margin: 10px;
	border: 1px solid #ccc;
`

class App extends Component {
	constructor(props) {
		super()

		this.state = {
			charities: [],
			selectedAmount: 10
		}
	}

	componentDidMount() {
		const self = this
		fetch('http://localhost:3001/charities')
			.then(function(resp) {
				return resp.json()
			})
			.then(function(data) {
				self.setState({ charities: data })
			})

		fetch('http://localhost:3001/payments')
			.then(function(resp) {
				return resp.json()
			})
			.then(function(data) {
				self.props.dispatch({
					type: 'UPDATE_TOTAL_DONATE',
					amount: summaryDonations(data.map(item => item.amount))
				})
			})
	}

	render() {
		const self = this
		const cards = this.state.charities.map(function(item, i) {
			const payments = [10, 20, 50, 100, 500].map((amount, j) => (
				<label key={j}>
					<input
						type="radio"
						name="payment"
						onClick={function() {
							self.setState({ selectedAmount: amount })
						}}
					/>{' '}
					{amount}
				</label>
			))

			return (
				<Card key={i}>
					<p>{item.name}</p>
					{payments}
					<button
						onClick={handlePay.call(
							self,
							item.id,
							self.state.selectedAmount,
							item.currency
						)}>
						Pay
					</button>
				</Card>
			)
		})

		return (
			<div className="container">
				<Title />
				{cards}
			</div>
		)
	}
}

export default App

function handlePay(id, amount, currency) {
	const self = this
	return function() {
		fetch('http://localhost:3001/payments', {
			method: 'POST',
			body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`
		})
			.then(function(resp) {
				return resp.json()
			})
			.then(function() {
				self.props.dispatch({
					type: 'UPDATE_TOTAL_DONATE',
					amount
				})
				self.props.dispatch({
					type: 'UPDATE_MESSAGE',
					message: `Thanks for donate ${amount}!`
				})

				setTimeout(function() {
					self.props.dispatch({
						type: 'UPDATE_MESSAGE',
						message: ''
					})
				}, 2000)
			})
	}
}
