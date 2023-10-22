import toast from 'react-hot-toast';

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
  state.items.push(payload);
};

const handlefulfilledDel = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isAuth = true;
  toast.success(`Welcome ${state.user.name}!`);
};

const handleRefreshFulfilled = (state, { payload }) => {
  state.user = payload;
};

const handleLogoutFulfilled = (state, { payload }) => {
  state.token = '';
  state.user = null;
  state.isAuth = false;
};

export {
  handlePending,
  handleRejected,
  handlefulfilled,
  handlefulfilledFetch,
  handlefulfilledAdd,
  handlefulfilledDel,
  handleAuthFulfilled,
  handleLogoutFulfilled,
  handleRefreshFulfilled,
};
