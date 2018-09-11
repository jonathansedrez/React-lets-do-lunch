import React, { Component } from 'react';

import {Button, Wrapper} from './styled';
import {Close, Modal, Error, InputName, InputSubmit, Input, Title} from '../../../../components/Modal';
import Overlay from '../../../../components/Overlay';
import api from '../../../../api';

class EditButton extends Component {  
  state = {
    isEnabled: true,
    isVisible: false,
    rest: {
      id: '',
      name: '',
      amount: 0,
      address: ''
    }
  }

  togglePage = () => {
    const visible = this.state.isVisible ? false : true
    this.setState({isVisible: visible})
  }
  
  handleClick = e => {
    const rest = e.target.parentNode.parentNode.parentNode;
    this.setState({
      rest: {
        id: rest.children[0].textContent,
        name: rest.children[1].textContent,
        amount: rest.children[2].textContent,
        address: rest.children[3].textContent,
      }
    })
    this.togglePage()
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

  handleSubmit = e => {
    e.preventDefault()
    const {rest} = this.state
    try {
      api.updateRestaurant(rest).then( res => {
        alert('sucesso')
        // return <SucessModal message={res.data.message} onClose={this.togglePage}/>
      })
    } catch (err) {
      alert('erro')
      // return <ErrorModal message={err} onClose={this.togglePage}/> 
    }
    this.togglePage()
  }

  render() { 
    const {isEnabled, isVisible, rest} = this.state
    return (
      <Wrapper>
        <Button onClick={this.handleClick}/>
        {isVisible && <Overlay />}
        <Modal onSubmit={this.handleSubmit} isVisible={isVisible}>
          <Close onClick={this.togglePage} type="button" />
          <Title>Editar restaurante</Title>
          <InputName type="text" value={rest.name} name="name" onChange={this.handleChange} error={isEnabled}/>
          {!isEnabled && <Error>Nome não pode ficar vazio</Error>}
          <Input type="text" value={rest.amount} name="amount" onChange={this.handleChange}/>
          <Input type="text" value={rest.address} name="address" onChange={this.handleChange}/>
          <InputSubmit type="submit" value="Editar" disabled={!isEnabled}/>
        </Modal> 
      </Wrapper>
    )
  }
}
 
export default EditButton;