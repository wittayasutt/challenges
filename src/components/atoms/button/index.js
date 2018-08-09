import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'

const Wrapper = styled.div`
	font-size: 14px;
	font-weight: 500;
	color: ${props => props.theme.primary};
	border: 1px solid ${props => props.theme.primary};
	border-radius: 3px;
	padding: 1px 5px;
	transition: 0.4s;
	cursor: pointer;

	:hover {
		color: #ffffff;
		background: ${props => props.theme.primary};
	}
`

class Button extends Component {
	render() {
		const { theme, children, onClick } = this.props

		return (
			<Wrapper theme={theme} onClick={onClick}>
				{children}
			</Wrapper>
		)
	}
}

export default withTheme(Button)
