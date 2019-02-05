import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../content.css';
import portrait from '../images/portrait.jpg';
import loadingCircle from '../images/one-third-circle.svg';
import experiences from './experiences.js';

class AboutMe extends React.Component {
  getExperienceComponent(experience) {
    return (
      <div key={`${experience.title} at ${experience.company}`}>
        <img className='experience-logo' src={experience.logo} alt={experience.company + ' logo'} />
        <h4>{experience.title} at {experience.company}</h4>
        <h5>{experience.dates}</h5>
        <p>{experience.location}</p>
        <p>{experience.description}</p>
      </div>
    );
  }

  render() {
    const experienceList = experiences.map(this.getExperienceComponent);

    return (
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item className='content' xs={10} md={8}>
          <div className='my-portrait'>
            <img className='my-portrait' src={portrait} alt='Christian Potdevin' />
            <img className='my-portrait loading-circle' src={loadingCircle} alt='Christian Potdevin loading' />
          </div>
          <div className='about-me-title'>
            <h1 className='about-me-title'>Christian Potdevin</h1>
            <h2 className='about-me-title'>Bachelor in Computer Science and Electronic Engineering</h2>
          </div>
          <h3>Experience</h3>
          {experienceList}
        </Grid>
      </Grid>
    );
  }
};

export default AboutMe;