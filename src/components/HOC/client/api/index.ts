import axios from 'axios';

const API_PATH = 'http://localhost:8080';

// axios.defaults.withCredentials = true;

const baseURL = (() => {
  return API_PATH;
})();

const defaultClient = axios.create({
  baseURL,
  //   withCredentials: true,
});

export default defaultClient;
