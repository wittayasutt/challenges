import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import { connect } from 'react-redux'
import { toCurrency } from '../../helpers'

const Wrapper = styled.div`
	min-height: 80px;
	display: flex;
	justify-content: space-between;
	margin: 30px 0 20px;
`

const Name = styled.h1`
	font-size: 32px;
	font-weight: 600;
	color: ${props => props.theme.neutral};

	.omise {
		color: ${props => props.theme.primary};
	}
`

const Donations = styled.div`
	text-align: right;
`

const Amount = styled.div`
	display: flex;
	font-size: 32px;
	color: ${props => props.theme.dark};

	.amount {
		min-width: 100px;
		margin-left: 5px;
	}
`

const Message = styled.p`
	font-weight: 600;
	color: ${props => props.theme.primary};
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
