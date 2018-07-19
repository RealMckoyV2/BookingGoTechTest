import React, { Component } from 'react';
import './App.css';
import { SearchBox } from './Components/SearchBox/SearchBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBox />
      </div>
    );
  }
}

export default App;
