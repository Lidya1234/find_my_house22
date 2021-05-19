import { createSlice } from '@reduxjs/toolkit'

export const findSlice = createSlice({
  name: 'House',
  initialState: {
    value: 0,
  },
  reducers: {
    FIND: (state) => {

      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { FIND } = findSlice.actions

export default findSlice.reducer;