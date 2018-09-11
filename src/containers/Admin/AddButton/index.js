import React, { Component } from 'react';


import {Close, Modal, Error, InputName, InputSubmit, Input, Title} from '../../../components/Modal'
import Button from './styled';
import api from '../../../api'
import Overlay from '../../../components/Overlay';

class AddButton extends Component {
  state = {
    isVisible: false,
    isEnabled: false,
    rest: {
      name: '',
      amount: 0,
      address: ''
    }
  }

  togglePage = () => {
    const visible = this.state.isVisible ? false : true
    this.setState({isVisible: visible})
  }

  handleSubmit = e => {
    e.preventDefault()
    const {rest} = this.state
    try {
      api.newRestaurant(rest).then( res => {
        // return <SucessModal message={res.data.message} onClose={this.togglePage}/>
      })      
    } catch (err) {
      // return <ErrorModal message={err} onClose={this.togglePage}/>        
    }
  }

  handleChange = e => {
    e.persist()
    this.setState(state => {
      const nextState = {
        ...state,
        rest: {
          ...state.rest,
          [e.target.name]: e.target.value,
        }
      }
      const isEnabled = nextState.rest.name ? true : false;
      return {
        ...nextState,
        isEnabled,
      }
    })
  }

  render() {
    const {isVisible, isEnabled} = this.state
    return (
      <div>
        <Button onClick={this.togglePage}>Novo</Button>
        {isVisible && <Overlay />}
        <Modal onSubmit={this.handleSubmit} isVisible={isVisible}>
          <Close onClick={this.togglePage} type="button"/>
          <Title>Novo restaurante</Title>
          <InputName type="text" placeholder="Nome restaurante" name="name" onChange={this.handleChange} error={isEnabled} autoFocus="true"/>
          {!isEnabled && <Error>Nome não pode ficar vazio</Error>}
          <Input type="number" placeholder="Valor" name="amount" onChange={this.handleChange}/>
          <Input type="text" placeholder="Endereço" name="address" onChange={this.handleChange}/>
          <InputSubmit type="submit" value="Enviar" disabled={!isEnabled}/>
        </Modal>        
      </div>
     );
  }
}
 
export default AddButton;