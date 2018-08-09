import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import 'bulma/css/bulma.min.css'
import './style/index.css'

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
