import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HTTP_STATUS } from '../constants/constants';

export const fetchHouses = createAsyncThunk('house/fetchHouses',
  async () => {
    const { data } = await axios.get('https://findlidushouse.herokuapp.com/api/v1/houses');
    // , {
    // mode: 'no-cors',
    // withCredentials: true,
    // credentials: 'include',
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Credentials': true,
    // },
    // }
    return data.data;
  });

export const fetchHouse = createAsyncThunk('house/fetchHouse',
  async (id) => {
    const { data } = await axios.get(`https://findlidushouse.herokuapp.com/api/v1/houses/${id}`);
    // , {
    //   mode: 'no-cors',
    //   withCredentials: true,
    //   credentials: 'include',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Credentials': true,
    //   },
    // }
    return data.data;
  });

export const loginstatus = createAsyncThunk('status/loginstatus',
  async () => {
    const { data } = await axios.get('https://findlidushouse.herokuapp.com/logged_in');
    // {
    //   mode: 'no-cors',
    //   withCredentials: true,
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Credentials': true,
    //   },
    // }
    console.log(data);
    return data;
  });

export const loginuser = createAsyncThunk('user/loginuser',
  async (user) => {
    const { data } = await axios.post('https://findlidushouse.herokuapp.com/login', { user });
    // , {
    //   withCredentials: true,
    //   mode: 'no-cors',
    // }
    // console.log(data);
    return data;
  });

export const logoutuser = createAsyncThunk('user/logoutuser',
  async () => {
    const { data } = await axios.post('https://findlidushouse.herokuapp.com/logout');
    return data;
  });

export const addfavorite = createAsyncThunk('favorite/addfavorite',
  async (favorite) => {
    const { data } = await axios.post('https://findlidushouse.herokuapp.com/favorites', { favorite }, { withCredentials: true });
    return data.data;
  });
export const fetchFavorite = createAsyncThunk('favorite/fetchFavorite',
  async () => {
    const { data } = await axios.get('https://findlidushouse.herokuapp.com/favorites');
    return data.data;
  });

export const findSlice = createSlice({
  name: 'House',
  initialState: {
    house: [],
    singlehouse: [],
    favorite: [],
    status: 'idle',
    userInfo: {},
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
    [fetchFavorite.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [fetchFavorite.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.favorite = action.payload;
    },
    [fetchFavorite.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [loginstatus.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [loginstatus.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.userInfo = action.payload;
    },
    [loginstatus.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [loginuser.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [loginuser.fulfilled](state, action) {
      state.status = HTTP_STATUS.FULFILLED;
      state.userInfo = action.payload;
    },
    [loginuser.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
    [logoutuser.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [logoutuser.fulfilled](state) {
      state.status = HTTP_STATUS.FULFILLED;
      state.userInfo = {};
    },
    [logoutuser.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
  },
});
/* eslint-enable no-param-reassign */
// Action creators are generated for each case reducer function
export const { SETUSER } = findSlice.actions;
export default findSlice.reducer;
