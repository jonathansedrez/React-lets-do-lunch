import styled from 'styled-components';

export const Modal = styled.form`
  position: fixed;
  display: ${({isVisible}) => isVisible ? 'block' : 'none'};
  top: 20%;
  left: calc(50% - 175px);
  width: 350px;
  padding: 25px;
  background-color: #fff;
`
export const Input = styled.input`
  display: block;
  padding: 8px;
  margin: 5px;
  outline: none;

  &:focus {
    border: 1px solid blue;
  }
`
export const InputName = Input.extend`
  border: ${({error}) => error ? '1px solid grey' : '1px solid red !important'};  
`
export const Close = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`
export const Error = styled.span`
  position: absolute;
  font-size: .7em;
  color: red;  
`