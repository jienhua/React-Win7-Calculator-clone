import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './components/App'

// import {addNum, setFractionStatus} from './actions/actions'
// store.dispatch(setFractionStatus(true))
// store.dispatch(addNum(9))
// store.dispatch(addNum(6))
// store.dispatch(addNum(5))
// store.dispatch(addNum(4))
// store.dispatch(addNum(3))
// store.dispatch(addNum(1))


render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)