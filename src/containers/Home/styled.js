import styled from 'styled-components';

import background from '../../img/background.jpg';

export const Bg = styled.div`
  position: absolute;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;  
`

export default Bg;