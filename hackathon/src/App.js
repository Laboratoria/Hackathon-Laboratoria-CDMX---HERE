import React, { Component } from 'react';
import './App.css';
// import Routes from '../src/routes';
import MapHere from './Components/Driver/Map/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapHere />
      </div>
    );
  }
}

export default App;
