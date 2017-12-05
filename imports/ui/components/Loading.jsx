import React, { Component } from 'react';
import autoBind from 'react-autobind';
import {VelocityComponent,VelocityTransitionGroup} from 'velocity-react';

import Second from './Main';

export default class Loading extends Component {
  constructor(props){
    super(props)

    this.state = {
    }

    //binding functions
    autoBind(this);
  }

  render() {
    return (
      <div className="row vh_height30">
        <svg className="spinner" viewBox="0 0 50 50">
          <circle className="path" cx="25" cy="25" r="20" stroke="black" fill="none" stroke-width="5"></circle>
        </svg>
      </div>
    );
  }
};
