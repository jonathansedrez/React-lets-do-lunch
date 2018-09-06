import React, { Component } from 'react';

import {Wrapper, Title, Amount} from './styled';
import Refresh from './Refresh';

class Description extends Component {
  render() {
    const  {data, isShow, togglePage} = this.props
    return (          
      <Wrapper isShow={isShow}>
        <Title>{data[0].name}</Title>        
        <p>Preço: <Amount>{data[0].amount}</Amount></p>
        <p>Endereço: {data[0].address}</p>
        <Refresh onClick={togglePage}/>
      </Wrapper>
    );
  }
}
 
export default Description;