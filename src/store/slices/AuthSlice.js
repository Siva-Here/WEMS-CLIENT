import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    username:null,
    userId:null,
  },
  reducers: {
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setAuthUsername(state, action) {
      state.username = action.payload;
    },
    setAuthUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export const { setAuthenticated, setAuthUsername,setAuthUserId } = AuthSlice.actions;
export default AuthSlice.reducer;
