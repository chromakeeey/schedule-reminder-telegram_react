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

export const getScheduleToEdit = async (scheduleId) => {
  const token = localStorage.getItem('access-token');

  const response = await axiosInstance.get(`schedules/${scheduleId}/to-edit`, {
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

export const scheduleSubscribers = async (scheduleId) => {
  const token = localStorage.getItem('access-token');

  const response = await axiosInstance.get(`schedules/${scheduleId}/subscribers`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

export const addLessonTemplate = async (scheduleId, name) => {
  const token = localStorage.getItem('access-token');

  const response = await axiosInstance.post(`schedules/${scheduleId}/lessons-info`, {
    name
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

export const deleteLessonTemplate = async (scheduleId, lessonTemplateId) => {
  const token = localStorage.getItem('access-token');
  
  const response = await axiosInstance.delete(`schedules/${scheduleId}/lessons-info/${lessonTemplateId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}