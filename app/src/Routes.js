import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import Home from './main-pages/Home';
import AboutMe from './main-pages/about-me/AboutMe';
import Projects from './main-pages/Projects';
import projectPaths from './projects/projectPaths';

export default class Routes extends React.Component {
  getProjectRoute = (projectData) => {
    return <Route key={`/projects/${projectData.path}${Date.now()}`}
                  exact path={`/projects/${projectData.path}`}
                  component={projectData.component} />;
  }

  render () {
    const projectRoutes = projectPaths.map(this.getProjectRoute);

    return (
      <Switch>
        <Route exact path='/' component={AboutMe} />
        {/* <Route exact path='/about-me' component={AboutMe} /> */}
        <Route exact path='/projects' component={Projects} />
        {projectRoutes}
      </Switch>
    );
  }
}
