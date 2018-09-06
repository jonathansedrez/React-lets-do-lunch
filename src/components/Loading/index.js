import React, { Component } from 'react';

import { Spinner, Rect1, Rect2, Rect3, Rect4, Rect5 } from './styled';

class Loading extends Component {
  render() { 
    return (
      <Spinner>
        <Rect1 />
        <Rect2 />
        <Rect3 />
        <Rect4 />
        <Rect5 />
      </Spinner>
    );
  }
}
 
export default Loading;