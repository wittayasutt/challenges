import React, { Component } from 'react'
import styled from 'styled-components'

import Title from './components/title'
import Cards from './components/cards'

const Container = styled.div``

class App extends Component {
	render() {
		return (
			<Container className="container">
				<Title />
				<Cards />
			</Container>
		)
	}
}

export default App
