import React, { Component } from 'react';

export default class AppLayout extends Component {
  render() {
    return (
      <div>{this.props.yield}</div>
    );
  }
};
