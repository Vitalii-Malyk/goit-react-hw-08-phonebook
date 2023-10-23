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
import { deleteContact, fetchContacts } from 'redux/authOperations';

const CreateListContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    if (contacts.items.length > 0) {
      dispatch(fetchContacts());
    }
    return;
  }, [contacts.items.length, dispatch]);

  const deleteContactFromList = ({ id, name }) => {
    dispatch(deleteContact(id));
    Notify.info(`The contact with the name ${name} has been deleted`, {
      position: 'center-center',
      autoHideDelay: 1500,
    });
  };

  const normalizedFilter = filter.toLocaleLowerCase();
  const filtredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const createContactItem = () => {
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
