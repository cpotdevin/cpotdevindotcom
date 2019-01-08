import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';

const App = () => (
  <div>
    <nav className='header'>
      <div className='header-cont'>
        <h1 className='logo'><NavLink exact to='/'>cpotdevin.com</NavLink></h1>
        <ul className='menu'>
          <li><NavLink exact to='/'>home</NavLink></li>
          <li><NavLink exact to='/proyects'>proyects</NavLink></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default App;
