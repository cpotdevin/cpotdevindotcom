import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import Proyects from './Proyects'
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
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/proyects' component={Proyects} />
    </Switch>
  </div>
);

export default App;
