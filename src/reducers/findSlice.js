import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HTTP_STATUS } from '../constants/constants'
export const fetchHouses = createAsyncThunk('house/fetchHouses',
    async () =>
    {
        const { data } = await axios.get('/houses');
        console.log(data.data, 'hii');
        return data;
    },);
export const findSlice = createSlice({
  name: 'House',
  initialState: {
    house: [],
    status: 'idle',
  },
  reducers: {
    FIND: (state) => {
     state.value += 1
    },
  },
  extraReducers: {
      [fetchHouses.pending](state)
      {
       state.status = HTTP_STATUS.PENDING;
      },
      [fetchHouses.fulfilled](state, action)
      { state.status = HTTP_STATUS.FULFILLED;
        state.house = action.payload;
      },
      [fetchHouses.rejected](state, action)
      {
        state.status = HTTP_STATUS.REJECTED;
      },
  }
})

// Action creators are generated for each case reducer function
export const { FIND } = findSlice.actions

export default findSlice.reducer;