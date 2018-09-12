import styled from 'styled-components';

import bg from '../../img/bg.svg';

export const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  background-size: cover;
  z-index: -1;
`

export default Bg;