import React, { Component } from 'react';

import Bg from './styled';
import PrimaryButton from './PrimaryButton';
import Description from './Description';
import api from '../../api';
import Loading from '../../components/Loading';

class Home extends Component {
  state = {
    showButton: true,
    showDescription: false,
    isLoading: false,
    description: [{}]
  }
  
  togglePage = () => {
    const {showButton, showDescription} = this.state
    this.setState({
      showButton: showButton ? false : true,
      showDescription: showDescription ? false : true
    })
  }

  handleClick = () => {
    try {
      this.setState({
        isLoading: true,
        showButton: false
      })
      api.fetchRandom().then( res => {
        this.setState({
          isLoading: false,
          showDescription: true,
          description: res.data
        })
      })
    } catch (error) {
      console.log(`Fetch random error: ${error}`)
    }
  }

  render() { 
    const {showButton, showDescription, isLoading, description} = this.state
    return (
      <Bg>
        {isLoading && <Loading />}
          <PrimaryButton onClick={this.handleClick} isShow={showButton}>Lets do Lunch!</PrimaryButton>
          <Description data={description} isShow={showDescription} togglePage={this.togglePage}/>
      </Bg>
    );
  }
}
 
export default Home;
