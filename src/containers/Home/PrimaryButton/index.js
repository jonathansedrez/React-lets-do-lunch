import styled from 'styled-components';

const PrimaryButton = styled.button`
  display: ${props => props.isShow ? 'block' : 'none'};
  position: absolute;
  width: 270px;
  height: 80px;
  top: calc(50% - 40px);
  left: calc(50% - 135px);
  color: #bf3939;    
  background: #fff;
  border-radius: 48px;
  font-size: 1.8em;
  font-family: 'Arvo', serif;
  font-weight: 500;
  border: 1px solid #bf3939;
  box-shadow: 0px 5px 1px #6d6d6d;
  cursor: pointer;
  outline: none;
  transition: .5s;

  &:active {
    transition: .5s;
    box-shadow: 0px 0px 25px black;
  }
`
export default PrimaryButton;
