import React, { Component } from 'react';
import autoBind from 'react-autobind';
import {VelocityComponent,VelocityTransitionGroup} from 'velocity-react';

import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';

export default class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      opacity: false,
      component: 1,
    }

    //binding functions
    autoBind(this);
  }

  toggleComponent() {
    this.setState(currentState => ({ opacity: false, component: currentState.component + 1}));
  }

  render() {

    let props = {
      opacity: this.state.opacity,
      toggleComponent: this.toggleComponent.bind(this)
    };

    let component = <First {...props} />;

    switch (this.state.component) {
      case 2: {
        component = <Second {...props} />
        break;
      }
      case 3: {
        component = <Third {...props} />
        break;
      }
    }

    return (
      <VelocityComponent
        animation={{opacity: 1}}
        duration={2000}
        begin={() => console.log("begin...")}
        complete={() => this.toggleComponent()}
      >
        {component}
      </VelocityComponent>
    );
  }
};
