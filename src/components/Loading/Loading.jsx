import React from 'react';
import ReactLoading from 'react-loading';

const Example = ({ type, color }) => (
  <ReactLoading
    type={type}
    color={'rgb(250, 235, 215)'}
    fill={'rgb(250, 235, 215)'}
    height={'3%'}
    width={'3%'}
  />
);

export default Example;
