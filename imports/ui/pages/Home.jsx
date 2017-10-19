import React, { Component } from 'react';
import autoBind from 'react-autobind';
import {VelocityComponent,VelocityTransitionGroup} from 'velocity-react';

import First from '../components/First';
import Second from '../components/Second';

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
    console.log("calling next screen...");
    this.setState(currentState => ({ component: currentState.component + 1}));
  }

  render() {

    let component = <First/>;
    console.log(this.state.component);

    switch (this.state.component) {
      case 2: {
        component = <Second/>
        break;
      }
    }

    return (
      <VelocityComponent
        animation={{opacity: this.state.opacity ? 1 : 0}}
        duration={20000}
        begin={() => console.log("begin...")}
        complete={() => this.toggleComponent()}
      >
        {component}
      </VelocityComponent>
    );
  }
};
