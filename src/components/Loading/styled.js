import styled, { keyframes }  from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoadingSpinner = styled.div`
  position: relative;
  top: calc(50% - 35px);
  left: calc(50% - 35px);
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 70px;
  height: 70px;
  animation: ${spin} 2s linear infinite;
`
export default LoadingSpinner