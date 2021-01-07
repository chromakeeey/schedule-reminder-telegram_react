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

      const response = await axiosInstance.get('verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      dispatch(setUser(response.data.user_id));
    }

    catch (error) {
      console.log(error);
      localStorage.removeItem('access-token');
    }
  }
};

export const getSubscriptions = async (userId) => {
  const token = localStorage.getItem('access-token');

  const response = await axiosInstance.get(`users/${userId}/subscriptions`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });

  return response.data;
};

export const getUser = async (userId) => {
  const token = localStorage.getItem('access-token');

  const response = await axiosInstance.get(`users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });

  return response.data;
}

export const subscribeSchedule = async (userId, scheduleId) => {
  const token = localStorage.getItem('access-token');

  const response = await axiosInstance.post(`users/${userId}/subscriptions`, {
    schedule_id: scheduleId,
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });

  return response.data;
};

export const unSubscribeSchedule = async (userId, scheduleId) => {
  const token = localStorage.getItem('access-token');

  const response = await axiosInstance.delete(`users/${userId}/subscriptions/${scheduleId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};

