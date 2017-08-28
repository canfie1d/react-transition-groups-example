import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NotFound extends React.Component {
  render () {
    return (
      <header>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
          <a href='https://reactcommunity.org/react-transition-group/#TransitionGroup' className='help-link'>Find a Major Key</a>
        </nav>
      </header>
    );
  }
}

