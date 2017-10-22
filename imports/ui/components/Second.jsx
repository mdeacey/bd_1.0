import React, { Component } from 'react';
import autoBind from 'react-autobind';
import ReactFitText from 'react-fittext';
import moment from 'moment';
import {VelocityComponent,VelocityTransitionGroup, velocityHelpers} from 'velocity-react';

import Header from './Header';

export default class Second extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: "ABCD.EF",
      placeholder: "Placeholder C1"
    }

    //binding functions
    autoBind(this);
  }

  componentDidMount() {
    let curTime = moment();
    this.setTime(curTime);
  }

  componentWillMount(){
    let self = this;
    setInterval(function(){
      let date = self.state.time;
      let curTime = date.add(1, 'm');
      self.setTime(curTime);
    }, 60 * 1000);
  }

  setTime(curTime) {
    console.log(curTime);
    let minute = curTime.minute().toString().length == 2 ? curTime.minute().toString().charAt(1) : curTime.minute().toString().charAt(0);
    if (minute >= "0" && minute < "5") {
      let add_min = 10 - parseInt(minute);
      this.setState({time: curTime, curTime: curTime.add(add_min, 'm').format("hh:mm a")});
    } else if (minute >= "5" && minute <= "9"){
      let add_min = 15 - parseInt(minute);
      this.setState({time: curTime, curTime: curTime.add(add_min, 'm').format("hh:mm a")});
    }
  }

  toggleText() {
    const {text} = this.state;

    if (text == "ABCD.EF") {
      this.setState({text: "AB.CD", placeholder: "Placeholder D1"});
    } else if (text == "AB.CD") {
      this.setState({text: "ABCD.EF", placeholder: "Placeholder C1"});
    }

    this.refs.text.runAnimation();
  }

  render() {
    const {text, placeholder, curTime} = this.state;

    return (
      <div className="wrapper">
        <Header/>
        <div className="home-container">
          <VelocityComponent
            animation={"transition.slideDownIn"}
            duration={200}
          >
            <button className="row row-h35 black-bg" onClick={() => console.log("clicked...")}>
              <ReactFitText minFontSize={16}>
                <h4 className="placeholder1-font">Placeholder A1</h4>
              </ReactFitText>
              <ReactFitText minFontSize={56}>
                <h1 className="font-56">A</h1>
              </ReactFitText>
              <ReactFitText minFontSize={20}>
                <h3 className="placeholder2-font">Placeholder A2</h3>
              </ReactFitText>
              <ReactFitText minFontSize={11}>
                <h5 className="placeholder3-font">Placeholder A3</h5>
              </ReactFitText>
            </button>
          </VelocityComponent>

          <div className="row row-h30">
            <ReactFitText minFontSize={32}>
              <h5 className="time">{curTime}</h5>
            </ReactFitText>
            <ReactFitText minFontSize={22}>
              <h6 className="placeholder1c-font">{placeholder}</h6>
            </ReactFitText>
            <VelocityComponent
              ref="text"
              animation={{opacity: 1}}
              duration={2000}
              complete={() => this.toggleText()}
            >
              <ReactFitText minFontSize={56}>
                <h1 className="font-56 black">{text}</h1>
              </ReactFitText>
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
              <ReactFitText minFontSize={56}>
                <h1 className="font-56">B</h1>
              </ReactFitText>
              <ReactFitText minFontSize={20}>
                <h3 className="placeholder2-font">Placeholder B2</h3>
              </ReactFitText>
              <ReactFitText minFontSize={11}>
                <h5 className="placeholder3-font">Placeholder B3</h5>
              </ReactFitText>
            </button>
          </VelocityComponent>
        </div>
      </div>
    );
  }
};


