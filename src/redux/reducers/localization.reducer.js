import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  locales: [],
  namespaces: [],
  currLocale: 0,
  currNamespace: 0,
  jsons: [],
}

export const reducer = createSlice({
  name: 'localization',
  initialState,
  reducers: {
    setLocalesRequest: () => {},
    setLocalesSuccess: (state, action) => {
      state.locales = action.payload
    },
    setNamespacesRequest: () => {},
    setNamespacesSuccess: (state, action) => {
      state.namespaces = action.payload
    },
    setCurrLocale: (state, action) => {
      state.currLocale = action.payload
    },
    setCurrNamespace: (state, action) => {
      state.currNamespace = action.payload
    },
    setJsonsRequest: () => {},
    setJsonsSuccess: (state, action) => {
      state.jsons.push(action.payload)
    },
  },
})

export const {
  setLocalesRequest,
  setLocalesSuccess,
  setNamespacesRequest,
  setNamespacesSuccess,
  setCurrLocale,
  setCurrNamespace,
  setJsonsRequest,
  setJsonsSuccess,
} = reducer.actions

export default reducer.reducer
