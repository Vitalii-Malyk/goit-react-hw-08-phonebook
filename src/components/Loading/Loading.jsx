import React from 'react';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';

const Loader = () => {
  const { isLoading } = useSelector(state => state.contacts);

  return isLoading && <Example />;
};

const Example = ({ type }) => (
  <ReactLoading
    type={type}
    color={'rgb(250, 235, 215)'}
    fill={'rgb(250, 235, 215)'}
    height={'3%'}
    width={'3%'}
  />
);

export default Loader;
