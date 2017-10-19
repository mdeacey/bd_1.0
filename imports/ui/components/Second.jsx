import React, { Component } from 'react';
import autoBind from 'react-autobind';
import {VelocityComponent,VelocityTransitionGroup} from 'velocity-react';

import Header from './Header';

export default class Second extends Component {
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
          <div className="row"></div>
          <div className="row">
            <h1>Second Screen</h1>
          </div>
          <div className="row"></div>
        </div>
      </div>
    );
  }
};


