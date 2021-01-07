import axiosInstance from './axiosInstance';

export const getUserSchedules = async (userId) => {
  const token = localStorage.getItem('access-token');

  const response = await axiosInstance.get(`users/${userId}/schedules`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};

export const getSchedule = async (scheduleId) => {
  const token = localStorage.getItem('access-token');

  const response = await axiosInstance.get(`schedules/${scheduleId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};

export const searchSchedules = async (keyWord) => {
  const token = localStorage.getItem('access-token');

  const response = await axiosInstance.get(`schedules/search/${keyWord}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};