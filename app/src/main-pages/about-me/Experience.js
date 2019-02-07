import React from 'react';
import Grid from '@material-ui/core/Grid';

const Experience = ({logo, title, company, dates, location, description}) => {
  const withLoadingBoarder = dates.includes('Present');
  const logoClass = withLoadingBoarder ? 'experience-logo' : 'experience-logo-with-border';
  const loading = dates.includes('Present') ? <div className='experience-logo-loading-circle'></div> : null;
  return (
    <Grid container key={`${title} at ${company}`} className='experience' justify='space-between' alignItems='center' direction='row-reverse'>
      <Grid className='experience-logo' item xs={12} sm={2}>
        <div className='test'>
          <img className={logoClass} src={logo} alt={company + ' logo'} />
          {loading}
        </div>
      </Grid>
      <Grid item className='experience-title' xs={12} sm={9}>
        <h4>{title} at {company}</h4>
        <h5>{dates}</h5>
        <p>{location}</p>
      </Grid>
      <Grid item xs={12}>
        <p>{description}</p>
      </Grid>
    </Grid>
  );
};

export default Experience;