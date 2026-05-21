import API from './api';

export const fetchArticles = () => API.get('/articles');
export const createArticle = (articleData) => API.post('/articles', articleData);
export const updateArticle = (id, articleData) => API.put(`/articles/${id}`, articleData);
export const deleteArticle = (id) => API.delete(`/articles/${id}`);
