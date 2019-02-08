import React from 'react';
import Grid from '@material-ui/core/Grid';
import portrait from '../../images/portrait.jpg';
import loadingCircle from '../../images/one-third-circle.svg';
import Experience from './Experience'
import experiences from './experiences';
import academicExperiences from './academicExperiences';
import Canvas from '../../content-helpers/Canvas';
import './about-me.css';

const AboutMe = () => (
  <Grid container className='content about-me' direction='row' justify='center' alignItems='center'>
    <Grid item className='header' xs={10} md={8}>
      <header>
        <div className='my-portrait'>
          <img className='my-portrait' src={portrait} alt='Christian Potdevin' />
          <img className='my-portrait loading-circle' src={loadingCircle} alt='Christian Potdevin loading' />
        </div>
        <div className='about-me-title'>
          <h1 className='about-me-title'>Christian Potdevin</h1>
          <h2 className='about-me-title'>Bachelor of Science in Electronic Engineering and Computer Science</h2>
        </div>
      </header>
    </Grid>
    <Grid item className='who-am-i' xs={10} md={8}>
      <h3>tl;dr</h3>
      <p>I am a big time DIYer, programmer, artist, and problem solver. Currently, I hold great interest in web/app development and am dedicating most of my time to courses and proyects that emphasize these topics. During most of 2017 and 2018 I was studying abroad in Geermany where I also worked as a backend developer and validation engineer. Some of my hobbies include photography, CGI, electronics DIY proyects and of course... programming. I am presently focusing on finishing my studies for my bachelor's degrees in Electronic Engineering and Computer Science. This will alow me to graduate at the start of the year 2020.</p>
    </Grid>
    <Grid container direction='row' justify='center' alignItems='center'>
      <Grid item className='skillset-text' xs={10} md={8}>
        <h3>Skills</h3>
        <p>Here are what I have appropriately denominated my skillwaves. Each wave characteristic has a particular meaning for the corresponding programming language: the period indicates how long ago I started learning it, the amplitude represents my current level of interest in it, the speed represents my comfort level with it, and finally, the noise represents how "rusty" I currently am with it.</p>
      </Grid>
      <Grid item className='skillset' xs={10} md={8}>
        <Canvas width='600' height='400' canvasID='canvas-test'/>
      </Grid>
      <Grid item className='skillset-text' xs={10} md={8}>
        <p>Besides my programming abilities I am native in English and Spanish, I have limited working proficiency in German and elementary proficiency in French.</p>
      </Grid>
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