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

export {
  handlePending,
  handleRejected,
  handlefulfilled,
  handlefulfilledFetch,
  handlefulfilledAdd,
  handlefulfilledDel,
};
