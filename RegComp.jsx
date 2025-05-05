import React, { Component } from 'react';

export class RegComp extends Component {
  render() {
    console.log("Regular Component render");
    return (
      <div>
        i'm the Regular Component{this.props.name}
      </div>
    )
  }
}

export default RegComp;
