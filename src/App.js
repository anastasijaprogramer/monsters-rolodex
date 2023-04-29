import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  constructor(props) {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }

    console.log('constructor');
  }

 //first time component initialization
  componentDidMount(){
    console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => 
        this.setState(
          () => {
            return {
              monsters: users,
            }
          }, 
          () => {
            console.log(this.state)
          }
      ));
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
            
    this.setState(() =>{
      return {searchField};
    })
  }

  render(){
    console.log('render');

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <input 
            className='search-box' 
            type='search'
            placeholder='Search monsters' 
            onChange={onSearchChange}
        />
         {filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            
            )
          })}
      
      </div>
    );
  }
}

export default App;
