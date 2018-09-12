import React, { Component } from 'react';

import {Button, Wrapper, ButtonModal, Title} from './styled';
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

  handleSubmit = async e => {
    e.preventDefault()
    const {restaurant} = this.state
    console.log(restaurant)
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
          <ButtonModal onClick={this.handleSubmit}>Sim</ButtonModal>
          <ButtonModal autoFocus onClick={this.togglePage}>Não</ButtonModal>
        </Modal>
      </Wrapper>      
    );
  }
}
 
export default DeleteButton;