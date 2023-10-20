import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export async function signUp(body) {
  const { data } = await instance.post('/users/signup', body);
  setToken(data.token);
  return data;
}
export async function refresh() {
  const token = JSON.parse(localStorage.getItem('persist:auth'));
  setToken(JSON.parse(token.token));
  const { data } = await instance.get('/users/current');
  return data;
}

export async function signIn(body) {
  const { data } = await instance.post('/users/login', body);
  setToken(data.token);
  return data;
}

export async function logout() {
  const { data } = await instance.post('/users/logout');
  return data;
}
