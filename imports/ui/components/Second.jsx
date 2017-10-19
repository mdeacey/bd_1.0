import React, { Component } from 'react';
import autoBind from 'react-autobind';
// import 'velocity-animate';
// import 'velocity-animate/velocity.ui';
import {VelocityComponent,VelocityTransitionGroup, velocityHelpers} from 'velocity-react';

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
          <VelocityTransitionGroup
            component="div"
            style={{width: "100%"}}
            enter={{animation: 'slideDown', duration: 200}}
          >
            <button className="row black-bg" onClick={() => console.log("clicked...")}>
              <h4 className="grey">Placeholder A1</h4>
              <h1 className="white">A</h1>
              <h3 className="white">Placeholder A2</h3>
              <h5 className="grey">Placeholder A3</h5>
            </button>
          </VelocityTransitionGroup>

          <div className="row">
            <h5 className="time">4:40pm</h5>
            <h6 className="grey">Placeholder C1</h6>
            <h1>ABCD.EF</h1>
          </div>

          <VelocityTransitionGroup
            component="div"
            style={{width: "100%"}}
            enter={{animation: 'slideUp', duration: 200}}
          >
            <button className="row black-bg" onClick={() => console.log("clicked...")}>
              <h4 className="grey">Placeholder B1</h4>
              <h1 className="white">B</h1>
              <h3 className="white">Placeholder B2</h3>
              <h5 className="grey">Placeholder B3</h5>
            </button>
          </VelocityTransitionGroup>
        </div>
      </div>
    );
  }
};


