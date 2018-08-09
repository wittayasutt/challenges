import React, { Component } from 'react'
import styled from 'styled-components'

import Button from '../atoms/button'
import Payments from './payments'

const Wrapper = styled.div``

const Card = styled.div`
	height: 350px;
	position: relative;
	border-radius: 4px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

	@media screen and (max-width: 540px) and (orientation: portrait) {
		height: 200px;
	}
`

const Img = styled.div`
	height: 280px;
	width: 100%;
	background: url('/images/${props => props.image}');
	background-position: center;
	background-size: cover;
	border-radius: 4px 4px 0 0;

	@media screen and (max-width: 540px) and (orientation: portrait) {
		height: 150px;
	}
`

const Content = styled.div`
	height: calc(100% - 280px);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;

	@media screen and (max-width: 540px) and (orientation: portrait) {
		height: calc(100% - 150px);
	}
`

const Name = styled.div`
	font-weight: 500;
`

class CardWrapper extends Component {
	constructor(props) {
		super()

		this.state = {
			open: false
		}

		this.handleToggle = this.handleToggle.bind(this)
	}

	handleToggle() {
		const open = !this.state.open
		this.setState({ open })
	}

	render() {
		const { item } = this.props
		const { open } = this.state

		return (
			<Wrapper className="column is-half">
				<Card>
					<Img image={item.image} />
					<Content>
						<Name>{item.name}</Name>
						<Button onClick={() => this.handleToggle()}>Donate</Button>
					</Content>
					<Payments item={item} open={open} close={this.handleToggle} />
				</Card>
			</Wrapper>
		)
	}
}

export default CardWrapper
