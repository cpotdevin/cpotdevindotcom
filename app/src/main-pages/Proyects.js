import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
// import proyectPaths from '../proyects/proyectPaths'
import mirrorSphere1 from '../images/proyects/mirrorSphere1.png';
import mirrorSphere2 from '../images/proyects/mirrorSphere2.png';
import VideoContainer from '../content-helpers/VideoContainer'
import './Proyects.css';

export default class Proyects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {robotVideoWidth: '560', robotVideoHeight: '315'};
  }

  getProyectComponent(proyectData) {
    return (
      <Paper key={`/proyects/${proyectData.path}`} xs={2}>
        <Link to={`/proyects/${proyectData.path}`}>{proyectData.name}</Link>
      </Paper>
    );
  }

  render() {
    // const proyectList = proyectPaths.map(this.getProyectComponent);

    return (
      <Grid container className='content' direction='row' justify='center' alignItems='center'>
        <Grid item xs={10} md={8}>
          <h1>Proyects and Hobbies</h1>
        </Grid>
        {/* <Grid container direction='row' justify='center' alignContent='center'>
          {proyectList}
        </Grid> */}
        <Grid container direction='row' justify='center' alignContent='center'>
          <Grid item xs={10} md={8}>
            <h3>Mirror Spheres</h3>
            <p>The following images were made using a 360˚ camera, Cinema4D and Adobe Photoshop.</p>
          </Grid>
          <Grid container direction='row' justify='center' alignContent='center'>
            <Grid item className='mirror-ball-image' xs={10} sm={5} md={4}>
              <img className='mirror-ball-image' src={mirrorSphere1} alt='mirror ball'/>
            </Grid>
            <Grid item className='mirror-ball-image' xs={10} sm={5} md={4}>
              <img className='mirror-ball-image' src={mirrorSphere2} alt='mirror ball'/>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction='row' justify='center' alignContent='center'>
          <Grid item xs={10} md={8}>
            <h3>F1 Race Game Programmed on RTOS</h3>
            <p></p>
          </Grid>
          <Grid item className='test' xs={10} md={8}>
            <VideoContainer width='315' height='560' src="https://www.youtube-nocookie.com/embed/_xuQujn2-LE" />
          </Grid>
        </Grid>

        <Grid container direction='row' justify='center' alignContent='center'>
          <Grid item xs={10} md={8}>
            <h3>3x3x3 LED Cube</h3>
            <p></p>
          </Grid>
          <Grid item className='test' xs={10} md={8}>
            <VideoContainer width='315' height='560' src="https://www.youtube-nocookie.com/embed/GTOnFk35C70" />
          </Grid>
        </Grid>

        <Grid container direction='row' justify='center' alignContent='center'>
          <Grid item xs={10} md={8}>
            <h3>Robot Golf Ball Collector</h3>
            <p></p>
          </Grid>
          <Grid item className='test' xs={10} md={8}>
            <VideoContainer width='560' height='315' src="https://www.youtube-nocookie.com/embed/7q8TOWlyzqU" />
          </Grid>
        </Grid>

        <Grid container direction='row' justify='center' alignContent='center'>
          <Grid item xs={10} md={8}>
            <h3>3D Animation</h3>
            <p></p>
          </Grid>
          <Grid item className='test' xs={10} md={8}>
            <VideoContainer width='560' height='315' src="https://www.youtube-nocookie.com/embed/MLxleatB2IA" />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
