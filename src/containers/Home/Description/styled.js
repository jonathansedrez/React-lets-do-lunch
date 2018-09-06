import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${props => props.isShow ? 'block' : 'none'};
  position: absolute;
  width: 350px;
  height: 200;
  top: calc(50% - 100px);
  left: calc(50% - 175px);
  padding: 22px;
  font-size: 1.2em;
  font-family: 'Roboto', sans-serif;
  color: #9b9b9b;    
  background: #fff;
  border-radius: 22px;
  border: 1px solid #bf3939;
  box-shadow: 0px 0px 25px black;
`
export const Title = styled.p`
  font-size: 1.8em;
  margin: 0px 0px 43px;
  text-align: center;
  color: #3d3d3d;
  border-right: 3px solid #bf3939;
`

export const Amount = styled.p`
  display: inline;
  &:before {
    content: 'R$ '
  }
`