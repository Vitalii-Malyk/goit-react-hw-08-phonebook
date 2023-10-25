import styled from 'styled-components';

export const FormElementStyle = styled('form')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    width: 'fit-content',
  };
});

export const InputElementStyle = styled('input')(() => {
  return {
    border: 'none',
    backgroundColor: 'antiquewhite',
    padding: '4px',
    borderRadius: '5px',
  };
});

export const WrapperStyle = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
  };
});
