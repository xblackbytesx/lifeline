import React, {Component} from 'react';

import ChildToggle from '../child-toggle/child-toggle'

// Static assets
// import logo from '../logo.svg';

class AppHeader extends Component {
  render() {
    return (
      <div className="app-header">
        <ChildToggle />
        <h2>Lifeline | Jamie</h2>
      </div>
    );
  }
}

export default AppHeader;
