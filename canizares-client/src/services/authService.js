import API from './api';

export const fetchMe = async () => {
  const res = await API.get('/users/me');
  return res.data;
};



