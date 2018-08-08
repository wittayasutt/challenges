import React, { Component } from 'react'
import styled from 'styled-components'
import config from '../../config'

class Payments extends Component {
	render() {
		const { payment } = config

		const payments = payment.map((amount, index) => (
			<label key={index}>
				<input
					type="radio"
					name="payment"
					onClick={() => this.props.setAmount(amount)}
				/>
				{amount}
			</label>
		))

		return <div>{payments}</div>
	}
}

export default Payments
