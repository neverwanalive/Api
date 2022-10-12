import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const reducer = createSlice({
  name: 'placeholder',
  initialState,
  reducers: {
    setUserDataRequest: () => {},
    setUserDataSuccess: (state, action) => {
      state.users = action.payload
    },
  },
})

export const { setUserDataRequest, setUserDataSuccess } = reducer.actions

export default reducer.reducer
