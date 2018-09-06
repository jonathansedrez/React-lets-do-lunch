import styled from 'styled-components';

import deleteImage from '../../../../icons/delete.svg';

export const Button = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  margin: 3px;
  background: url(${deleteImage}) no-repeat;
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

export const Modal = styled.div`
  position: fixed;
  display: ${({isVisible}) => isVisible ? 'block' : 'none'};
  top: 20%;
  left: calc(50% - 175px);
  width: 350px;
  padding: 25px;
  background-color: #fff;
`

export const Close = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`