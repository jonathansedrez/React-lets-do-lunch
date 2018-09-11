import styled from 'styled-components';

import bg from '../../img/bg.png';

export const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  z-index: -1;
`

export default Bg;