import styled, { keyframes }  from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoadingSpinner = styled.div`
  position: relative;
  top: calc(50% - 35px);
  left: calc(50% - 35px);
  
  border-radius: 50%;
  border-top: 3px solid #f46e42;
  border-bottom: 3px solid #f46e42;
  width: 70px;
  height: 70px;
  animation: ${spin} 1s linear infinite;
`
export default LoadingSpinner