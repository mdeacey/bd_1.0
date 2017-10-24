import React, { Component } from 'react';
import autoBind from 'react-autobind';
import {VelocityComponent,VelocityTransitionGroup} from 'velocity-react';

import Header from './Header';

export default class First extends Component {
  constructor(props){
    super(props)

    this.state = {
    }

    //binding functions
    autoBind(this);
  }

  render() {

    return (
      <div className="wrapper">
        <Header/>
        <div className="home-container">
          <div className="row-first">
            <h1 className="placeholder">Placeholder X</h1>
          </div>
        </div>
      </div>
    );
  }
};
