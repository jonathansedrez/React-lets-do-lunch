import React, { Component } from 'react';

import {fetchRestaurants} from '../../api';
import Loading from '../../components/Loading';
import Table from './Table';

class Admin extends Component {    
  state = {
    isLoading: true,
    showTable: false,
    rows: {}
  }
  
  componentDidMount() {
    try {
      fetchRestaurants().then( res => {
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
      data ? <Table data={data} /> : <Loading />
    )
  }
}
 
export default Admin;
