import React, { Component } from 'react';
import AppHeader from '../components/header';

class NotFound extends Component {

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

export default NotFound;
