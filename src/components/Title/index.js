import React, { Component } from 'react'
import { connect } from 'react-redux'

class Title extends Component {
	render() {
		const { donate, message } = this.props

		return (
			<div>
				<h1>Tamboon React</h1>
				<p>All donations: {donate}</p>
				<p>{message}</p>
			</div>
		)
	}
}

export default connect(state => state)(Title)
