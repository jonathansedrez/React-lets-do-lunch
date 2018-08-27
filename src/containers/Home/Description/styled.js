import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${props => props.isShow ? 'block' : 'none'};
`

export default Wrapper;