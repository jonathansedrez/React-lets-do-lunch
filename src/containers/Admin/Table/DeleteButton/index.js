import React, { Component } from 'react';

import {Button, Wrapper} from './styled';
import {Close, Modal} from '../../../../components/Modal';
import api from '../../../../api';
import Overlay from '../../../../components/Overlay';

class DeleteButton extends Component {
  state = {
    isVisible: false,
    restaurant: null
  }
  
  handleClick = e => {
    const restaurant = e.target.parentNode.parentNode.parentNode.children[0].textContent;
    this.setState({restaurant})
    this.togglePage()
  }

  togglePage = () => {
    const visible = this.state.isVisible ? false : true
    this.setState({isVisible: visible})
  }

  handleSubmit = async () => {
    const {restaurant} = this.state  
    try {
      await api.removeRestaurant(restaurant).then( res => {
        alert('sucesso')
        // return <SucessModal message={res.data.message} onClose={this.togglePage}/>
      })
    } catch (err) {
      alert('erro')
      // return <ErrorModal message={err} onClose={this.togglePage}/> 
    }
    this.togglePage()
    window.location.reload()
  }


  render() { 
    const {isVisible} = this.state;
    return (
      <Wrapper>
        <Button onClick={this.handleClick}/>
        {isVisible && <Overlay />}
        <Modal isVisible={isVisible}>
          <Close onClick={this.togglePage} type="button">X</Close>
          <h3>Remover restaurante?</h3>
          <button onClick={this.handleSubmit}>Sim</button>
          <button onClick={this.togglePage}>Não</button>
        </Modal>
      </Wrapper>      
    );
  }
}
 
export default DeleteButton;