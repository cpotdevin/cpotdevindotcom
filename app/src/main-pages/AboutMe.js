import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../content.css';
import portrait from '../images/portrait.jpg';


const AboutMe = () => (
  <Grid container direction='row' justify='center' alignItems='center'>
    <Grid container className='content' xs={10} md={8}>
      <img src={portrait} alt='Christian Potdevin' class='my-portrait' />
      <h1 id='about-me-name'>
        Christian Potdevin
        <h2 id='about-me-title'>Bachelor of Science in Computer Science and Electronic Engineering</h2>
      </h1>
    </Grid>
  </Grid>
);

export default AboutMe;