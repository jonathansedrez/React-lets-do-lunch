import styled from 'styled-components'

import reloadImage from '../../../../icons/reload.svg';

const Refresh = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;  
  border-radius: 40px;
  width: 60px;
  height: 60px;
  border: none;
  cursor: pointer;
  background: url(${reloadImage}) no-repeat;
  background-size: cover;
  cursor: pointer;

  &:before {
    content: '';
  }
`
export default Refresh