import React, {Component} from 'react';

import { slide as Menu } from 'react-burger-menu'
import ChildToggle from '../child-toggle/child-toggle'

// Static assets
// import logo from '../logo.svg';

class AppHeader extends Component {
  render() {
    return (
      <div>
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        <div className="app-header">
          <ChildToggle />
          <h2>Lifeline | Timmy</h2>
        </div>
      </div>
    );
  }
}

export default AppHeader;
