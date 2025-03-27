import { createSlice } from "@reduxjs/toolkit";

// Инициализация начального состояния
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

// Экспорт действий
export const { setUser, logout } = authSlice.actions;

// Экспорт редьюсера
export default authSlice;
