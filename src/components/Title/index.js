import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import { connect } from 'react-redux'
import { toCurrency } from '../../helpers'
import CountUp from 'react-countup'

const Wrapper = styled.div`
	height: 120px;
	width: 100%;
	position: fixed;
	top: 0;
	background: #ffffff;
	transition: 0.4s;
	z-index: 1;
	border-bottom: 1px solid
		${props => (props.top ? '#FFFFFF' : props.theme.primary)};
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 1.5rem auto 1rem !important;

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
	constructor(props) {
		super()

		this.state = {
			top: true,
			prevDonate: 0,
			donate: 0
		}

		this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			prevDonate: this.props.donate,
			donate: nextProps.donate
		})
	}

	handleScroll(event) {
		const top = window.scrollY > 0 ? false : true
		this.setState({ top })
	}

	render() {
		const { theme, message } = this.props
		const { top, prevDonate, donate } = this.state

		return (
			<Wrapper theme={theme} top={top}>
				<Container className="container">
					<Name theme={theme}>
						<span className="omise">Omise</span> Tamboon React
					</Name>
					<Donations>
						<Amount theme={theme}>
							All donations:
							<CountUp
								className="amount"
								start={prevDonate}
								end={donate}
								duration={1}
								redraw={true}
							/>
						</Amount>
						<Message theme={theme}>{message}</Message>
					</Donations>
				</Container>
			</Wrapper>
		)
	}
}

const mapStateToProps = state => ({
	donate: state.donate,
	message: state.message
})

export default connect(mapStateToProps)(withTheme(Title))
