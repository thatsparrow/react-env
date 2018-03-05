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

	return {
		...store,
		runSaga: sagaMiddleware.run
	}
}
