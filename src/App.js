import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './style/theme'

import Title from './components/title'
import Cards from './components/cards'

const Container = styled.div``

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Container className="container">
					<Title />
					<Cards />
				</Container>
			</ThemeProvider>
		)
	}
}

export default App
