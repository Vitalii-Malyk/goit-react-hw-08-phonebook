import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  ListElementStyle,
  ItemElementStyle,
  WrapElementStyle,
  WrapBtnStyle,
} from 'components/CreateListContact/CreateListContact.styled';
import { delContact } from 'redux/contactsOperations';

import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { Button, IconButton } from '@mui/material';

import FormUpdateContact from 'components/Forms/FormUpdateContact';
import {
  contactsSelector,
  filterSelector,
  isModalContactsSelector,
} from 'redux/Selectors';

const CreateListContact = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  const isModal = useSelector(isModalContactsSelector);
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);

  const handleOpen = id => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    !isModal && handleClose();
  }, [isModal]);

  const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgb(46, 49, 64)',
    border: '1px solid rgb(250, 235, 215, 0.1)',
    boxShadow: 24,
    p: 1,
    color: 'rgb(250, 235, 215)',
  };

  const deleteContactFromList = ({ id, name }) => {
    dispatch(delContact(id));
  };

  const updateContactFromList = ({ id, name }) => {
    handleOpen();
    setId(id);
  };

  const normalizedFilter = filter.toLocaleLowerCase();
  const filtredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const CreateContactItem = () => {
    return filtredContacts.map(contact => {
      return (
        <ItemElementStyle key={nanoid()}>
          <Card
            sx={{
              minWidth: 175,
              maxWidth: 200,
              height: 50,
              display: 'flex',
              backgroundColor: 'rgb(250, 235, 215)',
            }}
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
                aria-label="update"
                size="small"
                onClick={() => updateContactFromList(contact)}
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
        </ItemElementStyle>
      );
    });
  };
  return (
    <ListElementStyle>
      {contacts.items.length > 0 ? (
        CreateContactItem()
      ) : (
        <WrapElementStyle>
          The phone book is empty, add a contact
        </WrapElementStyle>
      )}
      <Modal open={open} onClose={handleClose}>
        <Box sx={styleModal}>
          <WrapBtnStyle>
            <Button
              onClick={handleClose}
              sx={{
                mt: 0,
                mb: 0,
                p: 0,
                minWidth: '7%',
                color: 'darkslategray',
                backgroundColor: 'rgb(250, 235, 215)',
                ':hover': {
                  backgroundColor: 'rgb(250, 235, 215, 0.8)',
                  color: 'rgba(25, 118, 210)',
                },
              }}
            >
              X
            </Button>
          </WrapBtnStyle>
          <FormUpdateContact
            contactId={id}
            closeModal={() => {
              handleClose();
            }}
          />
        </Box>
      </Modal>
    </ListElementStyle>
  );
};

export default CreateListContact;
