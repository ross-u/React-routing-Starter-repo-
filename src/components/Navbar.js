import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    username: 'YOUR NAME'
  } 

  render() {
    return (
      <nav id='navbar'>
        <ul>
          <li href="#!">Dashboard</li>
          <li href="#!">Contact</li>
          <li href="#!">About</li>

        </ul>

        <div className="nav-details">
          <p className="nav-username">{this.state.username}</p>
        </div>
      </nav>
    )
  }
}

export default Navbar;
