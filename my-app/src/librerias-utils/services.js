import axios from 'axios';

const API_URL = "http://tiendaonline2020.herokuapp.com/api";

const signUp = (userName, pass) => {
  const url = `${API_URL}/user/register`;

  return axios.post(url, { email: userName, password: pass });
};

const login = (userName, pass) => {
  const url = `${API_URL}/user/login`;

  return axios.post(url, { email: userName, password: pass });
};

const getProducts = () => {
  const url = `${API_URL}/product/all`;

  return axios.get(url);
};

export { signUp, login, getProducts };