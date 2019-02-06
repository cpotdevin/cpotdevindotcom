import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import proyectPaths from '../proyects/proyectPaths'
import '../content.css';

export default class Proyects extends React.Component {
  getProyectComponent(proyectData) {
    return (
      <Paper key={`/proyects/${proyectData.path}`} xs={2}>
        <Link to={`/proyects/${proyectData.path}`}>{proyectData.name}</Link>
      </Paper>
    );
  }

  render() {
    const proyectList = proyectPaths.map(this.getProyectComponent);

    return (
      <Grid container className='content' direction='row' justify='center' alignItems='center'>
        <Grid item xs={10} md={8}>
          <h1>Proyects</h1>
        </Grid>
        <Grid container direction='row' justify='center' alignContent='center'>
          {proyectList}
        </Grid>
      </Grid>
    );
  }
}
