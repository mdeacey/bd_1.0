import React, { Component } from 'react';
import autoBind from 'react-autobind';
import ReactFitText from 'react-fittext';
// import 'velocity-animate';
// import 'velocity-animate/velocity.ui';
import {VelocityComponent,VelocityTransitionGroup, velocityHelpers} from 'velocity-react';

import Header from './Header';

export default class Second extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: "ABCD.EF",
      placeholder: "C1"
    }

    //binding functions
    autoBind(this);
  }

  toggleText() {
    const {text} = this.state;

    if (text == "ABCD.EF") {
      this.setState({text: "AB.CD", placeholder: "D1"});
    } else if (text == "AB.CD") {
      this.setState({text: "ABCD.EF", placeholder: "C1"});
    }

    this.refs.text.runAnimation();
  }

  render() {
    const {text, placeholder} = this.state;

    return (
      <div className="wrapper">
        <Header/>
        <div className="home-container">
          <VelocityComponent
            animation={"transition.slideDownIn"}
            duration={200}
          >
            <button className="row row-h35 black-bg" onClick={() => console.log("clicked...")}>
              <ReactFitText minFontSize={22}>
                <h4 className="placeholder1-font">Placeholder A1</h4>
              </ReactFitText>
              <ReactFitText minFontSize={82}>
                <h1 className="font-112">A</h1>
              </ReactFitText>
              <ReactFitText minFontSize={30}>
                <h3 className="placeholder2-font">Placeholder A2</h3>
              </ReactFitText>
              <ReactFitText minFontSize={12}>
                <h5 className="placeholder3-font">Placeholder A3</h5>
              </ReactFitText>
            </button>
          </VelocityComponent>

          <div className="row row-h30">
            <h5 className="time">4:40pm</h5>
            <ReactFitText minFontSize={22}>
              <h6 className="placeholder1c-font">Placeholder {placeholder}</h6>
            </ReactFitText>
            <VelocityComponent
              ref="text"
              animation={{opacity: 1}}
              duration={2000}
              complete={() => this.toggleText()}
            >
              <h1 className="black">{text}</h1>
            </VelocityComponent>
          </div>

          <VelocityComponent
            animation={"transition.slideUpIn"}
            duration={200}
          >
            <button className="row row-h35 black-bg" onClick={() => console.log("clicked...")}>
              <ReactFitText minFontSize={22}>
                <h4 className="placeholder1-font">Placeholder B1</h4>
              </ReactFitText>
              <ReactFitText minFontSize={82}>
                <h1 className="font-112">B</h1>
              </ReactFitText>
              <ReactFitText minFontSize={30}>
                <h3 className="placeholder2-font">Placeholder B2</h3>
              </ReactFitText>
              <ReactFitText minFontSize={12}>
                <h5 className="placeholder3-font">Placeholder B3</h5>
              </ReactFitText>
            </button>
          </VelocityComponent>
        </div>
      </div>
    );
  }
};


