import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import {
  ListElementStyle,
  ItemElementStyle,
  // ButtonElementStyle,
  WrapElementStyle,
} from 'components/CreateListContact/CreateListContact.styled';
import { delContact } from 'redux/contactsOperations';

import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { IconButton } from '@mui/material';

const CreateListContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters);

  const deleteContactFromList = ({ id, name }) => {
    dispatch(delContact(id));
  };

  const normalizedFilter = filter.toLocaleLowerCase();
  const filtredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const createContactItem = () => {
    return filtredContacts.map(contact => {
      return (
        <ItemElementStyle key={nanoid()}>
          <Card
            sx={{ minWidth: 175, maxWidth: 200, height: 50, display: 'flex' }}
          >
            <CardContent sx={{ width: 150, m: 0, p: 0.2 }}>
              <Typography
                sx={{ mb: 0, textAlign: 'center', justifyContent: 'center' }}
                variant="elevation"
              >{`${contact.name}`}</Typography>
              <Typography
                sx={{ mb: 0, textAlign: 'center', justifyContent: 'center' }}
                color="text.secondary"
              >
                {`${contact.number}`}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => console.log('object')}
              >
                <UpdateIcon fontSize="inherit" color="primary" />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => deleteContactFromList(contact)}
              >
                <DeleteIcon fontSize="inherit" color="primary" />
              </IconButton>
            </CardActions>
          </Card>

          {/* {`${contact.name} : ${contact.number}`}
          <ButtonElementStyle
            data-id={contact.id}
            onClick={() => deleteContactFromList(contact)}
          >
            x
          </ButtonElementStyle> */}
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

// export function ContactCard() {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {`${contact.name}`}
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           {`${contact.number}`}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Update contact</Button>
//       </CardActions>
//       <CardActions>
//         <Button size="small">Delete contact</Button>
//       </CardActions>
//     </Card>
//   );
// }
