import styled from 'styled-components';

import editImage from '../../../../icons/edit.svg';

export const Button = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  margin: 3px;
  background: url(${editImage}) no-repeat;
  background-size: cover;
  cursor: pointer;
  border-radius: 40px;

  &:hover {
    box-shadow: 0px 0px 1px;
  }
`

export const Wrapper = styled.div`
  display: inline;
`
