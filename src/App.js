import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component { 
  constructor(props) {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }

   // console.log('constructor');
  }

 //first time component initialization
  componentDidMount(){
    //console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => 
        this.setState(
          () => {
            return {
              monsters: users,
            }
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
    //console.log('render');

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>


      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder={'Seach Monsters'}
        className={'monsters-search-box'}
      />
    
           <CardList monsters={filteredMonsters}/>
      
      </div>
    );
  }
}

export default App;
