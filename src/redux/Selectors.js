const isAuthSelector = state => state.auth.isAuth;
const isModalContactsSelector = state => state.contacts.isModal;
const filterSelector = state => state.filters;
const contactsSelector = state => state.contacts;
const isAuthLoadingSelector = state => state.auth.isLoading;
const isContactsLoadingSelector = state => state.contacts.isLoading;
const userSelector = state => state.auth.user;

export {
  isAuthSelector,
  isModalContactsSelector,
  filterSelector,
  contactsSelector,
  isAuthLoadingSelector,
  isContactsLoadingSelector,
  userSelector,
};
