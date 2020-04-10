import React, {Component} from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component {
API = 'https://jsonplaceholder.typicode.com/users';
  constructor(){
    super();

    this.state = {
      monsters :[] ,
      searchField: ''
    };

 }

  componentDidMount(){
    fetch(this.API)
      .then(r => r.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  };


  render(){
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App"> 
      <h1>Hello there!</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}/>
      <CardList monsters = {filterMonsters} >
      </CardList>
      </div>
    );
    }
}

export default App;
