import React from 'react';

export class Greeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Fedor'
    }
  }

  render() {
    return <div>
      Hello, {this.state.name}
    </div>
  }
}
