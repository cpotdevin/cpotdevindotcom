import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './main-pages/Home';
import AboutMe from './main-pages/AboutMe';
import Proyects from './main-pages/Proyects';
import proyectPaths from './proyects/proyectPaths';

export default class Routes extends React.Component {
  getProyectRoute = (proyectData) => {
    return <Route key={`/proyects/${proyectData.path}${Date.now()}`}
                  exact path={`/proyects/${proyectData.path}`}
                  component={proyectData.component} />;
  }

  render () {
    const proyectRoutes = proyectPaths.map(this.getProyectRoute);

    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about-me' component={AboutMe} />
        <Route exact path='/proyects' component={Proyects} />
        {proyectRoutes}
      </Switch>
    );
  }
}
