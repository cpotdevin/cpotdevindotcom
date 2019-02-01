import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import proyectPaths from './proyects/proyectPaths'
import './content.css';

export default class Proyects extends React.Component {
  getProyectLink(proyectData) {
    return (
      <Paper key={`/proyects/${proyectData.path}`}>
        <Link to={`/proyects/${proyectData.path}`}>{proyectData.name}</Link>
      </Paper>
    );
  }

  render() {
    const proyectList = proyectPaths.map(this.getProyectLink);

    return (
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid container className='content' xs={10} md={8}>
          <Grid item xs={12}>
            <h1>Proyects</h1>
          </Grid>
          <Grid container spacing='16' xs={12}>
            {proyectList}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
