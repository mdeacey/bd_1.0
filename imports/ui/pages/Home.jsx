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
      component: 1,
    }

    //binding functions
    autoBind(this);
  }

  componentDidMount() {
    let detectFlex = CSS.supports('flex-direction', 'column');
    if (!detectFlex) {
      this.setState({message: 'Your device is too old'});
    }

    let self = this;

    $(window).bind("orientationchange", function(evt){
      let isMobile = window.matchMedia("only screen and (max-width: 760px)");


      if (isMobile.matches) {
        switch(window.orientation) {
          case -90: case 90: {
          /* Device is in landscape mode */
          self.setState({message: 'Rotate your device to Portrait mode'});
        }
          break;
          default: {
            /* Device is in portrait mode */
            self.setState({message: undefined});
          }
        }
      }

    });
  }

  toggleComponent() {
    this.setState(currentState => ({ opacity: false, component: currentState.component + 1}));
  }

  render() {
    const {message} = this.state;

    if (message) {
      return (
        <div id="wrapper">
          <div className="home-container">
            <div className="row-first">
              <h3>{message}</h3>
            </div>
          </div>
        </div>
      );
    }


    ///////////// render components //////////////
    let props = {
      toggleComponent: this.toggleComponent.bind(this)
    };

    let component = <First {...props} />;

    switch (this.state.component) {
      case 2: {
        component = <Second {...props} />
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
