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

const mapStateToProps = state => ({
	donate: state.donate,
	message: state.message
})

export default connect(mapStateToProps)(Title)
