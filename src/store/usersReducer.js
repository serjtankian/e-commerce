import axios from 'axios';
import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { message } from 'antd';

export const registerUser = createAsyncThunk('REGISTER_USER', (newUser) => {
  return axios
    .post('http://localhost:3001/api/users/register', newUser)
    .then((response) => response.data);
});

export const loginUser = createAsyncThunk('LOGIN_USER', (user) => {
  return axios
    .post('http://localhost:3001/api/users/login', user)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
});

export const loggedUser = createAsyncThunk('IS_LOGGED', () => {
  return axios
    .get('http://localhost:3001/api/users/auth/me')
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
});

export const logoutUser = createAsyncThunk('LOGOUT_USER', () => {
  return axios
    .post('http://localhost:3001/api/users/logout')
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
});

export const setAdmin = createAsyncThunk('SET_ADMIN', (userId) => {
  return axios
    .post(`http://localhost:3001/api/user/admin/promove`, { userId: userId })
    .then((response) => {
      return response.data;
    });
});

const initialState = {
  loggedIn: null,
  id: null,
  name: '',
  email: '',
  password: null,
  isAdmin: '',
};

const usersReducer = createReducer(initialState, {
  [registerUser.fulfilled]: (state, action) => {
    message.success('¡¡Usuario creado con exito!!', 3);
    // alert(JSON.stringify(action.payload.user))
    // state = action.payload.user;
    return state;
  },
  [registerUser.pending]: (state, action) => {
    message.loading('Estamos creando tu usuario, danos unos segundos...', 1);
  },
  [registerUser.reject]: (state, action) => {
    message.error('Hubo un error, no pudimos crear tu usuario', 3);
  },
  [loginUser.fulfilled]: (state, action) => {
    message.success('¡¡Usuario logueado con exito!!', 3);
    state = { loggedIn: true, ...action.payload.user };
    console.log('STATE USER LOGGEDIN', state);
    return state;
  },
  [loginUser.pending]: (state, action) => {
    message.loading(
      'Estamos buscando tu usuario en la base de datos. Danos unos segundos...',
      1
    );
    return state;
  },
  [loginUser.rejected]: (state, action) => {
    message.error(
      'Tus datos son incorrectos. Por favor, revisa tu usuario y password',
      3
    );
    return state;
  },
  [loggedUser.fulfilled]: (state, action) => {
    state = { ...action.payload.user, loggedIn: true };
    return state;
  },
  [loggedUser.rejected]: (state, action) => {
    state = { ...initialState, loggedIn: false };
    return state;
  },
  [logoutUser.fulfilled]: (state, action) => {
    state = { ...initialState, loggedIn: false };
    return state;
  },
  [setAdmin.fulfilled]: (state, action) => {
    return state;
  },
});

// const userReducer = createSlice(initialState, {
//     [registerUser.fulfilled]: (state, action) =>  {state.user = action.payload; return state},
// });

export default usersReducer;
