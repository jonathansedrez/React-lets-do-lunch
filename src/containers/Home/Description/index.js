import React, { Component } from 'react';

import Wrapper from './styled';
import Refresh from './Refresh';

class Description extends Component {
  render() {
    const  {data, isShow, togglePage} = this.props
    return (          
      <Wrapper isShow={isShow}>
        <p>Nome: {data[0].name}</p>        
        <p>Preço: {data[0].amount}</p>
        <p>Endereço: {data[0].address}</p>
        <Refresh onClick={togglePage}/>
      </Wrapper>
    );
  }
}
 
export default Description;