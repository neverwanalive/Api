import { call, put, takeEvery } from 'redux-saga/effects'

import { apiRequest } from '../../api/request'
import {
  setCurrLocale,
  setCurrNamespace,
  setJsonsRequest,
  setJsonsSuccess,
  setLocalesRequest,
  setLocalesSuccess,
  setNamespacesRequest,
  setNamespacesSuccess,
} from '../reducers/localization.reducer'

function* localesSaga() {
  const data = yield call(() => apiRequest('localization', 'locales'))
  yield put(setLocalesSuccess(data))
  yield put(setCurrLocale(data[0]))
}

function* namespacesSaga() {
  const data = yield call(() => apiRequest('localization', 'namespaces'))
  yield put(setNamespacesSuccess(data))
  yield put(setCurrNamespace(data[0]))
}

function* jsonsSaga(args) {
  const data = yield call(() =>
    apiRequest(
      'localization',
      `${args.payload.currLocale}/${args.payload.currNamespace}`,
    ),
  )
  yield put(
    setJsonsSuccess({
      locale: args.payload.currLocale,
      namespace: args.payload.currNamespace,
      json: data,
    }),
  )
}

export const localizationSagas = [
  takeEvery(setLocalesRequest.type, localesSaga),
  takeEvery(setNamespacesRequest.type, namespacesSaga),
  takeEvery(setJsonsRequest.type, jsonsSaga),
]
