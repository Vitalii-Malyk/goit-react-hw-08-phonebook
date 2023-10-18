import { WrapMainElementStyle } from 'components/App/App.styled';
import CreateListContact from 'components/CreateListContact/CreateListContact';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import FormCreateContact from 'components/Forms/FormCreateContact';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { error } = useSelector(state => state.contacts);
  return (
    <>
      <WrapMainElementStyle>
        <h1>Phonebook</h1>
        <FormCreateContact />
        <h2>Contacts</h2>
        <FilterContacts />
        {error && <b>{error}</b>}
        <CreateListContact />
      </WrapMainElementStyle>
    </>
  );
};
export default HomePage;
