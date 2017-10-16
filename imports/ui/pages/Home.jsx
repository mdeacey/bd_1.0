import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      canSubmit: false,
    }

    //autobinding
    autoBind(this);
  }

  render() {

    return (
      <div className="container">
        <h1>Home</h1>
      </div>
    );
  }
};

const styles = {
  container: {
    width: 300,
  }
}
