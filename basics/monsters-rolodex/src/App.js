import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    // fetching data from an API (BackEnd)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  render() {
    
    // filtering monsters array based on the search box
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    

    return (
      <div className="App">
        {/* to ckeck the values right away, add this second argument in the second parameter of setState: () => console.log(this.state)*/}
        <input 
        type='search' 
        placeholder='search monsters' 
        onChange={e => 
          this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App;
