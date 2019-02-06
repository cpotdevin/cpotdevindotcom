import React from 'react';
import Grid from '@material-ui/core/Grid';
import './about-me.css';
import portrait from '../../images/portrait.jpg';
import loadingCircle from '../../images/one-third-circle.svg';
import Experience from './Experience'
import experiences from './experiences';
import academicExperiences from './academicExperiences';

const AboutMe = () => (
  <Grid container className='content about-me' direction='row' justify='center' alignItems='center'>
    <Grid item className='banner' xs={10} md={8}>
      <div className='my-portrait'>
        <img className='my-portrait' src={portrait} alt='Christian Potdevin' />
        <img className='my-portrait loading-circle' src={loadingCircle} alt='Christian Potdevin loading' />
      </div>
      <div className='about-me-title'>
        <h1 className='about-me-title'>Christian Potdevin</h1>
        <h2 className='about-me-title'>Bachelor of Science in Electronic Engineering and Computer Science</h2>
      </div>
    </Grid>
    <Grid item className='experiences' xs={10} md={8}>
      <h3>Experience</h3>
      {experiences.map(Experience)}
    </Grid>
    <Grid item className='education' xs={10} md={8}>
      <h3>Education</h3>
      {academicExperiences.map(Experience)}
    </Grid>
  </Grid>
);

export default AboutMe;