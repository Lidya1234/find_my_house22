import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HTTP_STATUS } from '../constants/constants';

export const fetchHouses = createAsyncThunk('house/fetchHouses',
  async () => {
    const { data } = await axios.get('/houses');
    console.log(data.data, 'hii');
    return data.data;
  });

export const fetchHouse = createAsyncThunk('house/fetchHouse',
  async (id) => {
    const { data } = await axios.get(`/houses/${id}`);
    console.log(data.data, 'hii');
    return data.data;
  });

export const loginstatus = createAsyncThunk('status/loginstatus',
  async () => {
    const { data } = await axios.get(`http://localhost:3001/logged_in', 
    {withCredentials: true}`);
    return data.data;
  });

export const loginuser = createAsyncThunk('user/loginuser',
  async (user) => {
    const { data } = await axios.post('http://localhost:3001/login', { user }, { withCredentials: true });
    return data.data;
  });

export const findSlice = createSlice({
  name: 'House',
  initialState: {
    house: [],
    singlehouse: [],
    status: 'idle',
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    SETUSER: (state, action) => ({
      filter: action.payload,
      catalogues: state.catalogues,
    }),
    CHANGE_SINGLE: (state, action) => ({
      single: action.payload,
      catalogues: state.catalogues,

    }),
  },
  /* eslint-disable no-param-reassign */
  extraReducers: {
    [fetchHouses.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [fetchHouses.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.house = action.payload;
    },
    [fetchHouses.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [fetchHouse.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [fetchHouse.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.singlehouse = action.payload;
    },
    [fetchHouse.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [loginstatus.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [loginstatus.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      if (state.isLoggedIn) {
        state.isLoggedIn = false;
        state.user = {};
      } else {
        state.isLoggedIn = true;
        state.user = action.payload;
      }
    },
    [loginstatus.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
  },
});
/* eslint-enable no-param-reassign */
// Action creators are generated for each case reducer function
export const { SETUSER } = findSlice.actions;

export default findSlice.reducer;
