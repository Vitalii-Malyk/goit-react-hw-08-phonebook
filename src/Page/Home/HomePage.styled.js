import styled from 'styled-components';

import bgImage from 'helper/image/telefon-bgc.jpg';

export const WrapMainElementStyle = styled.div`
  min-height: 100vh;
  color: antiquewhite;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: unset;
  background-position: center center;
`;
export const TitleStyle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 10px 0;
`;
