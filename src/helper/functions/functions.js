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

const handleAuthFullfilled = (state, action) => {
  state.token = action.payload.token;
  state.user = action.payload.user;
  state.isAuth = true;
  state.isLoading = false;
};

const handleRefreshFullfilled = (state, action) => {
  state.user = action.payload;
  state.isAuth = true;
  state.isLoading = false;
};

const handleLogoutFullfilled = (state, action) => {
  state.token = null;
  state.user = null;
  state.isAuth = false;
  state.isLoading = false;
};

// ?----------------CONTACTS----------------------

const handlePending = (state, action) => {
  state.isLoading = true;
  state.isModal = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handlefullfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const handlefullfilledFetch = (state, action) => {
  state.items = action.payload.map(item => {
    const selected = false;
    return { ...item, selected };
  });
};

const handlefullfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handlefullfilledDel = (state, action) => {
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
};

const handlefullfilledUpdate = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items[index].name = action.payload.name;
  state.items[index].number = action.payload.number;
  state.isModal = false;
};
const handlefullfilledClear = (state, action) => {
  state.items = action.payload;
};

export {
  handlePending,
  handleRejected,
  handlefullfilled,
  handlefullfilledFetch,
  handlefullfilledAdd,
  handlefullfilledDel,
  handleAuthPending,
  handleAuthFullfilled,
  handleAuthRejected,
  handleLogoutFullfilled,
  handleRefreshFullfilled,
  handlefullfilledUpdate,
  handlefullfilledClear,
};
