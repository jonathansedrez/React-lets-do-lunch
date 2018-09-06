import styled from 'styled-components';

import add from '../../../icons/add.svg';

const Button = styled.button`
  font-size: 1.6em;
  width: 120px;
  border-radius: 22px;
  border: none;
  margin-left: 55px;
  margin-bottom: 22px;
  cursor: pointer;

  &:before {
    content: '';
    background: url(${add}) no-repeat;
    background-size: cover;
    cursor: pointer;
    border-radius: 40px;

  }
`
export default Button