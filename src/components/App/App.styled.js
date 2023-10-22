import styled from 'styled-components';

import bgImage from 'helper/image/telefon-bgc.jpg';

export const WrapMainElementStyle = styled('div')(() => {
  return {
    minHeight: '100vh',
    fontSize: 24,
    color: 'antiquewhite',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'unset',
    backgroundPosition: 'center center',
  };
});
