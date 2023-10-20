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
};

const handleLogoutFulfilled = (state, { payload }) => {
  state.token = '';
  state.user = null;
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
};
