import styled from 'styled-components';

import bgImage from 'helper/image/telefon-bgc.jpg';

export const WrapMainElementStyle = styled.div`
  min-height: 100vh;
  font-size: 24;
  color: antiquewhite;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: unset;
  background-position: center center;

  > h1 {
    display: flex;
    margin: 0;
    gap: 10px;
  }
`;
