import React from 'react';
import {Link} from 'react-router-dom';
import proyectPaths from './proyects/proyectPaths'
import './content.css';

export default class Proyects extends React.Component {
  getProyectLink(proyectData) {
    return (
      <li key={`/proyects/${proyectData.path}`}>
        <Link to={`/proyects/${proyectData.path}`}>{proyectData.name}</Link>
      </li>
    );
  }

  render() {
    const listItems = proyectPaths.map(this.getProyectLink);

    return (
      <div className='content'>
        <h1>Proyects</h1>
          <ul className='proyect-gallery'>
            {listItems}
          </ul>
      </div>
    );
  }
}
