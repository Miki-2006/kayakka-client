import axios from 'axios';
import {  setUser } from './authSlice';


export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://kayakka-server.vercel.app/api/auth/login', {
      email,
      password,
    });
    
    const { token, user } = response.data;
    
    // Сохраняем токен и данные пользователя в Redux
    dispatch(setUser({ user, token }));
    
    // Сохраняем токен в localStorage для использования в будущем
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
    
  } catch (err) {
    console.error('Error during login:', err);
  }
};

