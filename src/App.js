import React from 'react';

import './App.css';
import Search from './Search';
import NamesContainer from './NamesContainer';

class App extends React.Component {

  state = {
    names: [
      'John', 'Abigail', 'X Æ A-Xii', 'Beyonce', 'Kim Kardashian', 'George Bush', 'Queen Elizabeth', 'Yeezy', 
    ],
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


    render(){
      return (
        <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
          <Search editSearchTerm = {this.editSearchTerm} searchTerm = {this.state.searchTerm}/>
          <br></br>
          <h3>These are the names:</h3>
          <NamesContainer names = {this.dynamicSearch()}/>
        </div>
      );
    }
}

export default App;
