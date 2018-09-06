import styled, { keyframes }  from 'styled-components';

const stretchdelay = keyframes`
  0%, 40%, 100% { 
    transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
  }
`

export const Spinner = styled.div`
  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
`
export const Rect1 = styled.div`
  background-color: yellow;
  height: 100%;
  width: 6px;
  display: inline-block;
  animation: ${stretchdelay} 1.2s infinite ease-in-out;
`
export const Rect2 = styled.div`
  animation-delay: -1.1s;
`
export const Rect3 = styled.div`
  animation-delay: -1.0s;
`
export const Rect4 = styled.div`
  animation-delay: -0.9s;
`
export const Rect5 = styled.div`
  animation-delay: -0.8s;
`