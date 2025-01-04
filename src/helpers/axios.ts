import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://posapi.canadiangelnails.com',
  // baseURL: 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default customAxios;
