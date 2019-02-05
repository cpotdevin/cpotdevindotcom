import React from 'react';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <Grid container className='header' direction='row' justify='center' alignItems='center'>
    <Grid container className='header-cont' sx={12} md={5}>
      <h1 className='logo'><NavLink exact to='/'>cpotdevin.com</NavLink></h1>
    </Grid>
    <Grid container className='menu-container' sx={12} md={5}>
      <ul className='menu'>
        <li><NavLink exact to='/'>home</NavLink></li>
        <li><NavLink exact to='/about-me'>about me</NavLink></li>
        <li><NavLink exact to='/proyects'>proyects</NavLink></li>
      </ul>
    </Grid>
  </Grid>
);

export default NavBar;