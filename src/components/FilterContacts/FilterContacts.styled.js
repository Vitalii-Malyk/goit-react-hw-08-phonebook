import styled from 'styled-components';

export const WrapElementStyle = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px',
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

export const WrapMainElementStyle = styled('div')(() => {
  return {
    display: 'flex',
    alignItems: 'end',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '10px',
  };
});
