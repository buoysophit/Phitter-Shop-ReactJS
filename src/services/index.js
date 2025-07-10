import aioxs from 'aioxs';
const api = aioxs.create({
  baseURL: 'https://api.example.com',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

