import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import { connect } from 'react-redux'
import { toCurrency } from '../../helpers'

const Wrapper = styled.div`
	min-height: 80px;
	display: flex;
	justify-content: space-between;
	margin: 1.5rem 0 1rem;

	@media screen and (max-width: 1087px) {
		padding: 0 0.75rem;
	}

	@media screen and (max-width: 768px) {
		min-height: 85px;
		flex-direction: column;
		justify-content: flex-start;
		margin: 0.75rem 0;
	}
`

const Name = styled.h1`
	font-size: 32px;
	font-weight: 600;
	color: ${props => props.theme.neutral};

	.omise {
		color: ${props => props.theme.primary};
	}

	@media screen and (max-width: 768px) {
		font-size: 20px;
		margin-bottom: 8px;
	}
`

const Donations = styled.div`
	text-align: right;

	@media screen and (max-width: 768px) {
		text-align: left;
	}
`

const Amount = styled.div`
	display: flex;
	font-size: 32px;
	color: ${props => props.theme.dark};

	.amount {
		min-width: 100px;
		margin-left: 5px;
	}

	@media screen and (max-width: 768px) {
		font-size: 16px;
		color: ${props => props.theme.neutral};

		.amount {
			min-width: auto;
		}
	}
`

const Message = styled.p`
	font-weight: 600;
	color: ${props => props.theme.primary};

	@media screen and (max-width: 768px) {
		font-size: 14px;
		font-weight: 400;
	}
`

class Title extends Component {
	render() {
		const { theme, donate, message } = this.props

		return (
			<Wrapper>
				<Name theme={theme}>
					<span className="omise">Omise</span> Tamboon React
				</Name>
				<Donations>
					<Amount theme={theme}>
						All donations: <div className="amount">{toCurrency(donate)}</div>
					</Amount>
					<Message theme={theme}>{message}</Message>
				</Donations>
			</Wrapper>
		)
	}
}

const mapStateToProps = state => ({
	donate: state.donate,
	message: state.message
})

export default connect(mapStateToProps)(withTheme(Title))
