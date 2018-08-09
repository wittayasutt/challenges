import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'

import { updateTotalDonate, updateMessage } from '../../actions'
import { toCurrency } from '../../helpers'

import Payments from './payments'

const Wrapper = styled.div``

const Card = styled.div`
	height: 300px;

	border: 1px solid #ccc;
`

class CardWrapper extends Component {
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
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ charitiesId: id, amount, currency })
		})
			.then(resp => resp.json())
			.then(() => {
				this.props.updateTotalDonate(amount)
				this.props.updateMessage(`+ Thanks for donate ${toCurrency(amount)}!`)
				setTimeout(() => {
					this.props.updateMessage(``)
				}, 2000)
			})
	}

	render() {
		const { item } = this.props
		const { selectedAmount } = this.state

		return (
			<Wrapper className="column is-half">
				<Card>
					<p>{item.name}</p>
					<Payments setAmount={this.handleSetAmount} />
					<button
						onClick={() =>
							this.handlePay(item.id, selectedAmount, item.currency)}>
						Pay
					</button>
				</Card>
			</Wrapper>
		)
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ updateTotalDonate, updateMessage }, dispatch)

export default connect(null, mapDispatchToProps)(CardWrapper)
