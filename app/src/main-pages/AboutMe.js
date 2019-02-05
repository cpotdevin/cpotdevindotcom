import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../content.css';
import portrait from '../images/portrait.jpg';
import loadingCircle from '../images/one-third-circle.svg';
import experiences from './experiences.js';

class AboutMe extends React.Component {
  getExperienceComponent(experience) {
    return (
      <Grid container key={`${experience.title} at ${experience.company}`} className='experience' justify='space-between' alignItems='center' direction='row-reverse'>
        <Grid className='experience-logo' item xs={12} sm={2}>
          <img className='experience-logo' src={experience.logo} alt={experience.company + ' logo'} />
        </Grid>
        <Grid item className='experience-title' xs={12} sm={9}>
          <h4>{experience.title} at {experience.company}</h4>
          <h5>{experience.dates}</h5>
          <p>{experience.location}</p>
        </Grid>
        <p>{experience.description}</p>
      </Grid>
    );
  }

  render() {
    const experienceList = experiences.map(this.getExperienceComponent);

    return (
      <Grid container className='content' direction='row' justify='center' alignItems='center'>
        <Grid item className='banner' xs={10} md={8}>
          <div className='my-portrait'>
            <img className='my-portrait' src={portrait} alt='Christian Potdevin' />
            <img className='my-portrait loading-circle' src={loadingCircle} alt='Christian Potdevin loading' />
          </div>
          <div className='about-me-title'>
            <h1 className='about-me-title'>Christian Potdevin</h1>
            <h2 className='about-me-title'>Bachelor in Computer Science and Electronic Engineering</h2>
          </div>
        </Grid>
        <Grid item className='experiences' xs={10} md={8}>
          <h3>Experience</h3>
          {experienceList}
        </Grid>
        <Grid item className='education' xs={10} md={8}>
          <h3>Education</h3>
        </Grid>
      </Grid>
    );
  }
};

export default AboutMe;