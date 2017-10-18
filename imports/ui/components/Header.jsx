import React, { Component } from 'react';
import autoBind from 'react-autobind';

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
        <p>Logo</p>
        <img src="/img/default-avatar.png" />
      </div>
    );
  }
};
