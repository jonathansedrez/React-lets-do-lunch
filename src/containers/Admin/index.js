import React, { Component } from 'react';

import Body from './styled';
import api from '../../api';
import Loading from '../../components/Loading';
import Table from './Table';
import AddButton from './AddButton';

class Admin extends Component {    
  state = {
    isLoading: true,
    showTable: false,
    rows: {}
  }
  
  componentDidMount() {
    try {
      api.fetchRestaurants().then( res => {
        this.setState({
          isLoading: false,
          showTable: true,
          rows: res
        })
      })
    } catch (error) {
      console.log(`Fetch restaurant error: ${error}`)
    }
  }

  render() {
    const {data} = this.state.rows    
    return (
      <Body>
        <AddButton />
        {data ? <Table data={data} /> : <Loading />}
      </Body>
    )
  }
}
 
export default Admin;
