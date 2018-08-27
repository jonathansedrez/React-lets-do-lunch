import styled from 'styled-components';

const PrimaryButton = styled.button`
  display: ${props => props.isShow ? 'block' : 'none'};
  border: none;
  background-color: #5575a8;
  color: #fff;
  cursor: pointer;
`
export default PrimaryButton;
