import React, { Component } from 'react';
import autoBind from 'react-autobind';
import {VelocityComponent,VelocityTransitionGroup} from 'velocity-react';

import Second from './Second';

export default class First extends Component {
  constructor(props){
    super(props)

    this.state = {
      display: true,
      opacity: 0
    }

    //binding functions
    autoBind(this);
  }

  componentDidMount() {
    let self = this;
    setTimeout(() => {
      self.setState({display: false, opacity: 1});
    }, 1000);
  }

  render() {
    const {opacity} = this.state;

    return (
      <div>
        {this.state.display &&
          <div id="wrapper">
            <div className="home-container">
              <div className="row-first">
                <h1 className="placeholder">
                  <svg className="spinner" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" stroke="black" fill="none" stroke-width="5"></circle>
                  </svg>
                </h1>
              </div>
            </div>
          </div>
        }
        <VelocityComponent
          animation={{opacity}}
          duration={2000}
        >
          <Second/>
        </VelocityComponent>
      </div>
    );
  }
};
