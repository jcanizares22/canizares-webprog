import API from './api';

export const registerUser = (userData) => API.post('/users/signup', userData);
export const loginUser = (credentials) => API.post('/users/login', credentials);
export const fetchUsers = (params) => API.get('/users', { params });
export const createUser = (userData) => API.post('/users', userData);
export const updateUser = (id, userData) => API.put(`/users/${id}`, userData);
export const deleteUser = (id) => API.delete(`/users/${id}`);
