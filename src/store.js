import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { donateReducer, messageReducer } from './reducers'

const reducer = combineReducers({
	donate: donateReducer,
	message: messageReducer
})

const initialState = {}

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store
