import styled from 'styled-components';

export const ListElementStyle = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 18px;
  display: grid;
  justify-content: center;
  gap: 12px;

  @media (min-width: 420px) {
    grid-template-columns: 0fr 0fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 0fr 0fr 0fr;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 0fr 0fr 0fr 0fr 0fr;
  }
`;

export const ItemElementStyle = styled('li')(() => {
  return {
    display: 'flex',
    gap: '8px',
  };
});

export const ButtonElementStyle = styled('button')(() => {
  return {
    border: '0',
    color: 'antiquewhite',
    padding: '4px 6px',
    fontSize: '10px',
    cursor: 'pointer',
    background: 'transparent',
  };
});

export const WrapElementStyle = styled('div')(() => {
  return {
    marginTop: '5px',
    fontSize: '18px',
  };
});
export const WrapBtnStyle = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'flex-end',
  };
});
