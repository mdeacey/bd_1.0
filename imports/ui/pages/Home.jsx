import React, { Component } from 'react';
import autoBind from 'react-autobind';

import Header from '../components/Header';

export default class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      canSubmit: false,
    }

    //binding functions
    autoBind(this);
  }

  render() {

    return (
      <div className="wrapper">
        <Header/>
        <div className="home-container">
          <div className="row"></div>
          <div className="row">
            <h1>Placeholder X</h1>
          </div>
          <div className="row"></div>
        </div>
      </div>
    );
  }
};
