import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import localizationReducer from './reducers/localization.reducer'
import placeholderReducer from './reducers/placeholder.reducer'
import { rootSaga } from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    placeholder: placeholderReducer,
    localization: localizationReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
