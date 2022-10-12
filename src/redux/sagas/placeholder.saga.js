import { call, put, takeEvery } from 'redux-saga/effects'

import { apiRequest } from '../../api/request'
import {
  setUserDataRequest,
  setUserDataSuccess,
} from '../reducers/placeholder.reducer'

function* placeholderSaga() {
  const data = yield call(() => apiRequest('placeholder', 'users'))
  yield put(setUserDataSuccess(data))
}

export const placeholderSagas = [
  takeEvery(setUserDataRequest.type, placeholderSaga),
]
