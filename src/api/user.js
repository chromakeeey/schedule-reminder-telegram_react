import axiosInstance from './axiosInstance'
import { setUser } from '../reducers/userReducer';

export const Authentication = (telegramToken) => {
  return async (dispatch) => {
    const response = await axiosInstance.get(`auth/${telegramToken}`);

    dispatch(setUser(response.data.user.id));
    localStorage.setItem('access-token', response.data.token);  
  }
};

export const Verify = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('access-token');
      console.log(token);

      const response = await axiosInstance.get('verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      dispatch(setUser(response.data.user_id));
    }

    catch (error) {
      console.log(error);
      //localStorage.removeItem('access-token');
    }
  }
};
