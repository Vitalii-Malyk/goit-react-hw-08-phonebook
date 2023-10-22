import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const dellToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export async function signUp(body) {
  const { data } = await instance.post('/users/signup', body);
  setToken(data.token);
  return data;
}
export async function refresh(token) {
  setToken(token);
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
  dellToken();
  return data;
}
