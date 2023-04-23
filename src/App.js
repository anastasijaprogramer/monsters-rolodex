import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  constructor(props) {
    super();

    this.state = {
      name:'Anci',
    }

  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Cao {this.state.name}
          </p>
        <button>
          Change Name
        </button>
        </header>
      </div>
    );
  }
}

export default App;
