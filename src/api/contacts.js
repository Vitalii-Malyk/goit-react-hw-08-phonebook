import axios from 'axios';
import { Notify } from 'notiflix';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export async function getContacts(token) {
  setToken(token);
  const { data } = await instance.get('/contacts');
  return data;
}

export async function postContact(token, { name, phone }) {
  setToken(token);
  try {
    const { data } = await axios.post('/contacts', {
      name: name,
      number: phone,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function delContact(token, id) {
  setToken(token);
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    if (data) {
      return data;
    } else {
      return Notify.info(`Try again later`, {
        position: 'center-center',
        timeout: '1500',
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function updateContact(token, id) {
  setToken(token);
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    if (data) {
      return data;
    } else {
      return Notify.info(`Try again later`, {
        position: 'center-center',
        timeout: '1500',
      });
    }
  } catch (error) {
    console.error(error);
  }
}
