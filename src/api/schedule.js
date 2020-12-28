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