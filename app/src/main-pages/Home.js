import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../content.css';

const Home = () => (
  <Grid container direction='row' justify='center' alignItems='center'>
    <Grid container className='content' xs={10} md={8}>
      <Grid container xs={12}>
        <h1>Hello, world!</h1>
      </Grid>
      <Grid container xs={12}>
        <p>This is my personal website, here you may find some of my proyects and ideas.</p>
      </Grid>
    </Grid>
  </Grid>
);

export default Home;