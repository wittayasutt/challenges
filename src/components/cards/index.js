import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'

import { updateTotalDonate } from '../../actions'
import { summaryDonations } from '../../helpers'

import Card from './card'

const Columns = styled.div`
	@media screen and (min-width: 769px) {
		flex-flow: row wrap;
	}
`

class Cards extends Component {
	constructor(props) {
		super()

		this.state = {
			charities: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3001/charities')
			.then(resp => resp.json())
			.then(data => {
				this.setState({ charities: data })
			})

		fetch('http://localhost:3001/payments')
			.then(resp => resp.json())
			.then(data => {
				this.props.updateTotalDonate(
					summaryDonations(data.map(item => item.amount))
				)
			})
	}

	render() {
		const { charities } = this.state

		return (
			<Columns className="columns">
				{charities.map((item, index) => <Card key={index} item={item} />)}
			</Columns>
		)
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ updateTotalDonate }, dispatch)

export default connect(null, mapDispatchToProps)(Cards)
