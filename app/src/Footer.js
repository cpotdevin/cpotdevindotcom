import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.css';

const Footer = () => (
  <Grid container className='footer' justify='center' alignItems='center'>
    <footer>
      <Grid item xs={12}>
        <p>© 2019 Christian Potdevin</p>
      </Grid>
    </footer>
  </Grid>
);

export default Footer;