import React from 'react';
import Grid from '@material-ui/core/Grid';
import './content.css';

const Home = () => ({
  render() {
    return (
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid container className='content' xs={10} md={8}>
          <h1>Hello, world!</h1>
          <p>This is my personal website, here you may find some of my proyects and ideas.</p>
        </Grid>
      </Grid>
    );
  }
});

export default Home;