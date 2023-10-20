import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authSlice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authPersistedReducer,
};
