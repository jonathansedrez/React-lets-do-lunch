import React, { Component } from 'react';

import {Button, Wrapper, ButtonAccept, ButtonReject} from './styled';
import {Close, Modal, Title} from '../../../../components/Modal';
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
          <Close onClick={this.togglePage} type="button" />
          <Title>Remover restaurante?</Title>
          <ButtonAccept onClick={this.handleSubmit}>Sim</ButtonAccept>
          <ButtonReject autoFocus onClick={this.togglePage}>Não</ButtonReject>
        </Modal>
      </Wrapper>      
    );
  }
}
 
export default DeleteButton;