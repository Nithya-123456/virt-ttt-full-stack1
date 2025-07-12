import React, { Component } from 'react';

class LoggerComponent extends Component {
  componentDidMount() {
    console.log('Component has mounted!');
  }

  render() {
    return (
      <div>
        <h2>Hello from LoggerComponent</h2>
      </div>
    );
  }
}

export default LoggerComponent;