import React, { Component } from 'react';
import autoBind from 'react-autobind';
import ReactFitText from 'react-fittext';

export default class Header extends Component {
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
      <div className="header-container">
        <ReactFitText maxFontSize={34} minFontSize={18}>
          <label>Logo</label>
        </ReactFitText>
        <img src="/img/default-avatar.svg" />
      </div>
    );
  }
};
