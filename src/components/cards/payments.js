import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled, { withTheme } from 'styled-components'
import fetch from 'isomorphic-fetch'
import config from '../../config'

import { updateTotalDonate, updateMessage } from '../../actions'
import { toCurrency } from '../../helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Radio from '../atoms/radio'
import Button from '../atoms/button'

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(255, 255, 255, 0.95);

	visibility: ${props => (props.open ? 'visible' : 'hidden')};
	opacity: ${props => (props.open ? 1 : 0)};
	transition: 0.4s;
`

const Title = styled.div`
	font-size: 14px;
	font-weight: 500;
	margin-bottom: 10px;
`

const Select = styled.div`
	margin-bottom: 12px;
`

const CloseWrapper = styled.div`
	height: 50px;
	width: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0;
	opacity: 0.7;
	transition: 0.2s;
	cursor: pointer;

	:hover {
		opacity: 1;
	}
`

const Close = styled(FontAwesomeIcon)`
	font-size: 12px;
`

const Warning = styled.div`
	position: absolute;
	bottom: 10px;
	font-size: 14px;
	font-weight: 500;
	color: ${props => props.theme.primary};
`

class Payments extends Component {
	constructor(props) {
		super()

		this.state = {
			selectedAmount: 0,
			warning: false
		}

		this.handleSetAmount = this.handleSetAmount.bind(this)
		this.handlePay = this.handlePay.bind(this)
	}

	handleSetAmount(amount) {
		this.setState({ selectedAmount: amount })
	}

	handlePay(id, amount, currency) {
		const { updateTotalDonate, updateMessage } = this.props

		if (amount > 0) {
			fetch('http://localhost:3001/payments', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ charitiesId: id, amount, currency })
			})
				.then(resp => resp.json())
				.then(() => {
					updateTotalDonate(amount)
					updateMessage(`+ Thanks for donate ${toCurrency(amount)}!`)
					this.setState({ warning: false })

					setTimeout(() => {
						updateMessage(``)
					}, 2000)
				})
		} else {
			this.setState({ warning: true })
		}
	}

	render() {
		const { theme, item, open } = this.props
		const { selectedAmount, warning } = this.state
		const { payment } = config

		return (
			<Wrapper open={open}>
				<Title>Select the amount to donate (USD)</Title>
				<Select>
					{payment.map((amount, index) => (
						<Radio
							key={index}
							amount={amount}
							selectedAmount={selectedAmount}
							setAmount={this.handleSetAmount}
						/>
					))}
				</Select>
				<Button
					onClick={() =>
						this.handlePay(item.id, selectedAmount, item.currency)}>
					Pay
				</Button>
				{/* <CloseWrapper onClick={() => close()}>
					<Close icon="times" />
				</CloseWrapper> */}
				{selectedAmount === 0 &&
					warning && (
						<Warning theme={theme}>
							Please select your amount to donate.
						</Warning>
					)}
			</Wrapper>
		)
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ updateTotalDonate, updateMessage }, dispatch)

export default connect(null, mapDispatchToProps)(withTheme(Payments))
