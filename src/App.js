import React, { Component } from 'react';
import AppHeader from './components/header';

// Static assets
import './styles/lifeline.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
