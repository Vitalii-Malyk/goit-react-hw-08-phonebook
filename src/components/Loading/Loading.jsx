import React from 'react';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';

import {
  isAuthLoadingSelector,
  isContactsLoadingSelector,
} from 'redux/Selectors';

import { Container } from './Loading.styled';

export const Loader = () => {
  const isLoading = useSelector(isContactsLoadingSelector);
  const loader = useSelector(isAuthLoadingSelector);
  return (isLoading || loader) && <LoaderWrapper />;
};

const LoaderWrapper = () => (
  <Container>
    <ReactLoading
      color={'rgb(14, 127, 221)'}
      fill={'rgb(14, 127, 221)'}
      height={'5%'}
      width={'5%'}
    />
  </Container>
);

export const Loader2 = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const loader = useSelector(state => state.auth.isLoading);
  return (isLoading || loader) && <LoaderWrapper2 />;
};

const LoaderWrapper2 = () => (
  <Container>
    <ReactLoading
      color={'rgb(250, 235, 215)'}
      fill={'rgb(250, 235, 215)'}
      height={'5%'}
      width={'5%'}
    />
  </Container>
);
