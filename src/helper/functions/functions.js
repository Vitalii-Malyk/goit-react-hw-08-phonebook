import toast from 'react-hot-toast';

// ?----------------USER----------------------
const handleAuthPending = (state, action) => {
  state.isLoading = true;
  state.error = null;
  state.isAuth = false;
};

const handleAuthRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleAuthFulfilled = (state, action) => {
  state.token = action.payload.token;
  state.user = action.payload.user;
  state.isAuth = true;
  state.isLoading = false;
  toast.success(`Welcome ${state.user.name}!`);
};

const handleRefreshFulfilled = (state, action) => {
  state.user = action.payload;
  state.isAuth = true;
  state.isLoading = false;
};

const handleLogoutFulfilled = (state, action) => {
  state.token = null;
  state.user = null;
  state.isAuth = false;
  state.isLoading = false;
};

// ?----------------CONTACTS----------------------

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handlefulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlefulfilledFetch = (state, { payload }) => {
  state.items = payload;
};

const handlefulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = [payload, ...state.items];
};

const handlefulfilledDel = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

export {
  handlePending,
  handleRejected,
  handlefulfilled,
  handlefulfilledFetch,
  handlefulfilledAdd,
  handlefulfilledDel,
  handleAuthPending,
  handleAuthFulfilled,
  handleAuthRejected,
  handleLogoutFulfilled,
  handleRefreshFulfilled,
};
