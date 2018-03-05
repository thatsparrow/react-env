import { call, fork, put, all, takeLatest, takeEvery } from 'redux-saga/effects'
import * as ActionTypes from './../constants/actions'
import * as api from './api'

function* fetchData(action) {
	try {
		yield put({ type: ActionTypes.INITIATE_REQUEST_FETCH_DATA })
		const { data } = yield call(api.fetchData, action.data)
		yield put({ type: ActionTypes.SUCCESS_FETCH_DATA, data })
	} catch (e) {}
}

function* watchFetchData() {
	yield takeLatest(ActionTypes.REQUEST_FETCH_DATA, fetchData)
}


export default function* rootSaga() {
	yield all([
		fork(watchFetchData)
	])
}
