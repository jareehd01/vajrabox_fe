import { createSlice } from '@reduxjs/toolkit';

const getInitialLoginState = () => {
  const stored = localStorage.getItem('is_user_loggedin');
  return stored === 'true';
};

const initialState = {
  is_user_loggedin: getInitialLoginState(),
  user: null, // can hold username/email/phone, etc.
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.is_user_loggedin = true;
      state.user = action.payload;
      localStorage.setItem('is_user_loggedin', 'true');
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.is_user_loggedin = false;
      state.user = null;
      localStorage.setItem('is_user_loggedin', 'false');
      localStorage.removeItem('user');
    },
    initializeUser: (state) => {
      const stored = localStorage.getItem('is_user_loggedin');
      state.is_user_loggedin = stored === 'true';
      const user = localStorage.getItem('user');
      state.user = user ? JSON.parse(user) : null;
    },
  },
});

export const { login, logout, initializeUser } = userSlice.actions;
export default userSlice.reducer; 