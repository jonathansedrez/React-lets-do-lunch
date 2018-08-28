import React, { Component } from 'react';

import Td from './styled';

class Table extends Component {
  state = {
    visible: false
  }

  handleHover = () => {
    this.setState({visible: true})    
  }

  render() {    
    const {data} = this.props
    return (
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Endreço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map( row => {
            return (
              // Tem como eu passar a key dentro do mouseOver e mostrar apenas a tr com a key identificada?
              <tr key={row._id} onMouseOver={this.handleHover}>
                {/* <td>{row._id}</td> */}
                <td>{row.name}</td>
                <td>{row.amount}</td>
                <td>{row.address}</td>
                <Td isShow={this.state.visible}>
                  <button>edit</button>
                  <button>delete</button>
                </Td>
              </tr>
            )}
          )}
        </tbody>
      </table>
    )
  }
}
 
export default Table;