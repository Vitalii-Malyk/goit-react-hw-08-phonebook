import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';

import {
  ListElementStyle,
  ItemElementStyle,
  ButtonElementStyle,
  WrapElementStyle,
} from 'components/CreateListContact/CreateListContact.styled';
import { delContact, fetchContacts } from 'redux/contactsOperations';
import Loader from 'components/Loading/Loading';

const CreateListContact = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const contacts = useSelector(state => state.contacts);
  const isAuth = useSelector(state => state.auth.isAuth);
  const filter = useSelector(state => state.filters);

  useEffect(() => {
    if (!isAuth) return;
    dispatch(fetchContacts());
  }, [dispatch, isAuth]);

  const deleteContactFromList = ({ id, name }) => {
    dispatch(delContact(id));
    Notify.info(`The contact with the name ${name} has been deleted`, {
      position: 'center-center',
      autoHideDelay: 1500,
    });
  };

  const normalizedFilter = filter.toLocaleLowerCase();
  console.log(normalizedFilter);
  const filtredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const createContactItem = () => {
    console.log(filtredContacts);
    return filtredContacts.map(contact => {
      return (
        <ItemElementStyle key={nanoid()}>
          {`${contact.name} : ${contact.number}`}
          <ButtonElementStyle
            data-id={contact.id}
            onClick={() => deleteContactFromList(contact)}
          >
            x
          </ButtonElementStyle>
        </ItemElementStyle>
      );
    });
  };
  return (
    <ListElementStyle>
      {loading && <Loader />}
      {error && <p>Error... {error}</p>}
      {contacts.items.length > 0 ? (
        createContactItem()
      ) : (
        <WrapElementStyle>
          The phone book is empty, add a contact
        </WrapElementStyle>
      )}
    </ListElementStyle>
  );
};

export default CreateListContact;
