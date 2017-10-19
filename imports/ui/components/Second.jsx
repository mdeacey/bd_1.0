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
          <div className="flex row black-bg">
            <h4 className="grey">Placeholder A1</h4>
            <h1 className="white">A</h1>
            <h3 className="white">Placeholder A2</h3>
            <h6 className="grey">Placeholder A3</h6>
          </div>
          <div className="row">
            <h5>4:40pm</h5>
            <h6 className="grey">Placeholder C1</h6>
            <h1>ABCD.EF</h1>
          </div>
          <div className="flex row black-bg">
            <h4 className="grey">Placeholder B1</h4>
            <h1 className="white">B</h1>
            <h3 className="white">Placeholder B2</h3>
            <h6 className="grey">Placeholder B3</h6>
          </div>
        </div>
      </div>
    );
  }
};


