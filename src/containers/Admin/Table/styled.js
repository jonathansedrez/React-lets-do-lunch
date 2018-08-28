import styled from 'styled-components';

const Td = styled.td`
  display: ${props => props.isShow ? 'block' : 'none'}
`

export default Td