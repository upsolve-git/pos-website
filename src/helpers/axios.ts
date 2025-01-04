import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://pos-backend-env.eba-ammp5czi.us-east-1.elasticbeanstalk.com',
  // baseURL: 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default customAxios;
