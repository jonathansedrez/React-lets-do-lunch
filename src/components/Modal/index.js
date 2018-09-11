import styled, { keyframes } from 'styled-components';


export const Modal = styled.form`
  position: fixed;
  display: ${({isVisible}) => isVisible ? 'block' : 'none'};
  top: 20%;
  left: calc(50% - 175px);
  width: 350px;
  padding: 25px;
  background-color: #FAFAFC;
  border-radius: 22px;
`
export const Title = styled.h3`
  font-weight: 100;
  font-size: 1.5em;  
  border-bottom: 1px solid grey;
  text-align: left;
`

export const Input = styled.input`
  display: block;
  position: relative;
  padding: 18px;
  margin: 36px 10px 10px;
  width: 90%;
  border: none;
  border-bottom: 1px solid #3d3d3d;
  border-radius: 14px;
  outline: none;
  box-shadow: 0px 1px 5px #3d3d3d;

  &:first-child{
    margin-top: 0px;
  }

  &:focus {
    transition: .5s linear;
    box-shadow: 0px 0px 2px #3d3d3d;
  }
`
export const InputName = Input.extend`
  border: ${({error}) => error ? '' : '1px solid #d35252 !important'};
  margin-top: ${({error}) => error ? '' : '35px'};
`

export const InputSubmit = Input.extend`
  width: 50%;
  border-radius: 40px;
  border: 1px solid #3d3d3d;
  font-size: 1.3em;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 30px;
  max-width: 200px;

  &:disabled{
    border: 1px solid grey;
    color: grey;
    cursor: initial;
  }
`

export const Close = styled.button`
    position: absolute;
    top: 10px;
    right: 25px;
    width: 30px;
    height: 30px;
    border-radius: 22px;
    border: 1px solid #3d3d3d;
    background: transparent;
    color: #3d3d3d;
    cursor: pointer;
    font-size: 23px;

  &:before{
    width: 25px;
    height: 25px;
    content: 'x';
  }
`
const fadeIn = keyframes`
    from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`

export const Error = styled.span`
  display: block;
  position: absolute;
  font-size: .7em;
  color: #d35252;
  animation: ${fadeIn} 1s;
  text-align: right;
  left: 45px;
`


