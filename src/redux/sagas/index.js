import { all } from 'redux-saga/effects'

import { localizationSagas } from './localization.saga'
import { placeholderSagas } from './placeholder.saga'

export function* rootSaga() {
  yield all([...localizationSagas, ...placeholderSagas])
}
