import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authSlice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const reducer = {
  auth: persistReducer(authConfig, authReducer),
  contacts: persistReducer(contactsConfig, contactsReducer),
  filters: filterReducer,
};
