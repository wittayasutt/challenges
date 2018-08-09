import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import { toCurrency } from '../../../helpers'

const Label = styled.label`
	position: relative;
	font-size: 14px;
	font-weight: 500;
	margin: 7px;
	padding-left: 18px;
	cursor: pointer;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	:hover input ~ .checkmark,
	input:checked ~ .checkmark {
		border: 4.5px solid ${props => props.theme.primary};
	}

	.checkmark:after {
		top: 9px;
		left: 9px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: white;
	}
`

const Input = styled.input`
	display: none;
`

const Span = styled.span`
	height: 12px;
	width: 12px;
	position: absolute;
	top: 3px;
	left: 0;
	background-color: #ffffff;
	border-radius: 50%;
	border: 1px solid #c6c6c6;
	transition: 0.2s;

	:after {
		content: '';
		position: absolute;
		display: none;
	}
`

class Radio extends Component {
	render() {
		const { theme, amount, setAmount } = this.props

		return (
			<Label theme={theme}>
				<Input type="radio" name="payment" onClick={() => setAmount(amount)} />
				<Span className="checkmark" />
				{toCurrency(amount)}
			</Label>
		)
	}
}

export default withTheme(Radio)
