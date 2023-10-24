import React from 'react';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import { Container } from './Loading.styled';

const Loader = () => {
  const { isLoading } = useSelector(state => state.contacts);
  const loader = useSelector(state => state.auth.isLoading);
  return (isLoading || loader) && <LoaderWrapper />;
};

const LoaderWrapper = () => (
  <Container>
    <ReactLoading
      color={'rgb(14, 127, 221, 0.5)'}
      fill={'rgb(14, 127, 221, 0.5)'}
      height={'5%'}
      width={'5%'}
    />
  </Container>
);

export default Loader;
