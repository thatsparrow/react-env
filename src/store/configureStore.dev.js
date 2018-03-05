import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './../reducers'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(sagaMiddleware)
	)

	if (module.hot) {
		// enable webpack hot module replacement for reducers
		module.hot.accept('./../reducers', () => {
			const nextRootReducer = require('./../reducers').accountReducer
			store.replaceReducer(nextRootReducer)
		})
	}

	return {
		...store,
		runSaga: sagaMiddleware.run
	}
}
