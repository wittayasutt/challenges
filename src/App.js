import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './style/theme'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes)

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

