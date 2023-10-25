import styled from 'styled-components';

import bgImage from 'helper/image/telefon-bgc.jpg';

export const ButtonStyle = styled.button`
  display: block;
  color: black;
  padding: 5px;
  margin-bottom: 20px;
  width: fit-content;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  background-color: white;
  &:hover,
  &:focus {
    color: blueviolet;
    border-color: blueviolet;
  }
`;

export const TitleStyle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;
export const TextStyle = styled.h2`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;
export const WrapLoaderStyle = styled.div`
  height: 20px;
  @media (min-width: 768px) {
    height: 40px;
  }
  @media (min-width: 1280px) {
    height: 75px;
  }
`;
export const WrapMainElementStyle = styled.div`
  min-height: 100vh;
  color: antiquewhite;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: unset;
  background-position: center center;
`;
