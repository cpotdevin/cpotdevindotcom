import React from 'react';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <Grid container className='menu-bar' justify='center' alignItems='center'>
    <Grid item className='menu-bar-cont' xs={12} md={5}>
      <h1 className='banner'><NavLink exact to='/'>cpotdevin.com</NavLink></h1>
    </Grid>
    <Grid item className='menu-container' xs={12} md={5}>
      <ul className='menu'>
        <li><NavLink exact to='/'>home</NavLink></li>
        <li><NavLink exact to='/about-me'>about me</NavLink></li>
        <li><NavLink exact to='/proyects'>proyects</NavLink></li>
      </ul>
    </Grid>
  </Grid>
);

export default NavBar;