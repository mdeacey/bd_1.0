import React, { Component } from 'react';
import autoBind from 'react-autobind';
import moment from 'moment';
import {VelocityComponent,VelocityTransitionGroup, velocityHelpers} from 'velocity-react';

import Header from './Header';

const slideDownAnimation = velocityHelpers.registerEffect({
  defaultDuration: 900,
  calls: [
    [{
      opacity: [1, 0],
      translateY: [0, -75],
    }, 1, {
      // delay: 500,
      // easing: 'ease-in',
    }]
  ],
});

const slideUpAnimation = velocityHelpers.registerEffect({
  defaultDuration: 900,
  calls: [
    [{
      opacity: [1, 0],
      translateY: [0, 75],
    }, 1, {
      // delay: 500,
      // easing: 'ease-in',
    }]
  ],
});


export default class Second extends Component {
  constructor(props){
    super(props)

    this.state = {
      display: true,
      text: "ABCD.EF",
      smallText: "ABC",
      placeholder: "Placeholder C1"
    }

    //binding functions
    autoBind(this);
  }

  componentDidMount() {
    this.setTime(moment());
    let self = this;
    setInterval(() => {
      self.setState({display: true});
    }, 500);
  }

  componentWillMount(){
    let self = this;
    setInterval(function(){
      self.setTime(moment());
    }, 60 * 1000);
  }

  setTime(curTime) {
    let time = curTime;
    let minute = time.minute().toString().length == 2 ? time.minute().toString().charAt(1) : time.minute().toString().charAt(0);
    if (minute >= "0" && minute < "5") {
      let add_min = 10 - parseInt(minute);
      this.setState({curTime: time.add(add_min, 'm').format("h:mm a")});
    } else if (minute >= "5" && minute <= "9"){
      let add_min = 15 - parseInt(minute);
      this.setState({curTime: time.add(add_min, 'm').format("h:mm a")});
    }
  }

  toggleText() {
    const {text} = this.state;

    if (text == "ABCD.EF") {
      this.setState({text: "AB.CD", smallText: "A", placeholder: "Placeholder D1"});
    } else if (text == "AB.CD") {
      this.setState({text: "ABCD.EF", smallText: "ABC", placeholder: "Placeholder C1"});
    }

    this.refs.text.runAnimation();
  }

  render() {
    const {text, smallText, placeholder, curTime} = this.state;

    return (
      <div id="wrapper">
        <Header/>
        <VelocityComponent
          animation={slideDownAnimation}
        >
          <div className="row vh_height35 black-bg" onClick={() => console.log("clicked...")}>
            <h4 className="placeholder1-font">Placeholder A1</h4>
            <h1 className="font-56">A</h1>
            <h3 className="placeholder2-font">Placeholder A2</h3>
            <h6 className="placeholder3-font">Placeholder A3</h6>
          </div>
        </VelocityComponent>

        <div className="row vh_height30">
          <h5 className="time">{curTime}</h5>
          <h2 className="placeholder1c-font">{placeholder}</h2>
          <VelocityComponent
            ref="text"
            animation={{opacity: 1}}
            duration={2000}
            complete={() => this.toggleText()}
          >
            <div className="font-weight-600 dynamic-content">
              <span className='font-56-center black'>{text}</span>
              <span className="small-text black">{smallText}</span>
            </div>
          </VelocityComponent>
        </div>

        <VelocityComponent
          animation={slideUpAnimation}
        >
          <div className="row vh_height35 black-bg" onClick={() => console.log("clicked...")}>
            <h4 className="placeholder1-font">Placeholder B1</h4>
            <h1 className="font-56">B</h1>
            <h3 className="placeholder2-font">Placeholder B2</h3>
            <h6 className="placeholder3-font">Placeholder B3</h6>
          </div>
        </VelocityComponent>
      </div>
    );
  }
};


