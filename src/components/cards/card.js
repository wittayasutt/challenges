import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'

import { updateTotalDonate, updateMessage } from '../../actions'

import Payments from './payments'

const Wrapper = styled.div`
	margin: 10px;
	border: 1px solid #ccc;
`

class Card extends Component {
	constructor(props) {
		super()

		this.state = {
			selectedAmount: 10
		}

		this.handleSetAmount = this.handleSetAmount.bind(this)
		this.handlePay = this.handlePay.bind(this)
	}

	handleSetAmount(amout) {
		this.setState({ selectedAmount: amout })
	}

	handlePay(id, amount, currency) {
		fetch('http://localhost:3001/payments', {
			method: 'POST',
			body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`
		})
			.then(resp => resp.json())
			.then(() => {
				this.props.updateTotalDonate(amount)
				this.props.updateMessage(`Thanks for donate ${amount}!`)
				setTimeout(() => {
					this.props.updateMessage(``)
				}, 2000)
			})
	}

	render() {
		const { item } = this.props
		const { selectedAmount } = this.state

		return (
			<Wrapper>
				<p>{item.name}</p>
				<Payments setAmount={this.handleSetAmount} />
				<button
					onClick={() =>
						this.handlePay(item.id, selectedAmount, item.currency)}>
					Pay
				</button>
			</Wrapper>
		)
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ updateTotalDonate, updateMessage }, dispatch)

export default connect(null, mapDispatchToProps)(Card)
