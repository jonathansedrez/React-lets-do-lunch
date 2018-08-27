import React, { Component } from 'react';

import Wrapper from './styled';

class Description extends Component {
  render() {
    const  {data, isShow} = this.props
    return (          
      <Wrapper isShow={isShow}>
        <p>Nome: {data[0].name}</p>        
        <p>Preço: {data[0].amount}</p>
        <p>Endereço: {data[0].address}</p>
      </Wrapper>
    );
  }
}
 
export default Description;