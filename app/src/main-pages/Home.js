import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../content.css';

const Home = () => (
  <Grid container className='content' direction='row' justify='center' alignItems='center'>
    <Grid item xs={10} md={8}>
      <h1>Hello, world!</h1>
    </Grid>
    <Grid item xs={10} md={8}>
      <p>This is my personal website, here you may find some of my proyects and ideas.</p>
    </Grid>
  </Grid>
);

export default Home;