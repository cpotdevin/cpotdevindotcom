import React, {Component} from 'react';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import Home from './Home';
import Proyects from './Proyects';
import './index.css'

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className='header'>
            <div className='header-cont'>
              <h1 className='logo'><NavLink exact to='/'>cpotdevin.com</NavLink></h1>
              <ul className='menu'>
                <li><NavLink exact to='/'>home</NavLink></li>
                <li><NavLink exact to='/proyects'>proyects</NavLink></li>
              </ul>
            </div>
          </div>
          <div className='paths'>
            <Route exact path='/' component={Home} />
            <Route exact path='/proyects' component={Proyects} />
          </div>
        </div>
      </HashRouter>
    )
  }
}