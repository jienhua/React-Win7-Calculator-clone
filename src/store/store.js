import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import calApp from '../reducers/reducer'

const loggerMiddleware = createLogger();

let store = createStore(
	calApp,
	applyMiddleware(
		loggerMiddleware
	)
)


export default store