import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component render");
    return (
      <div>
        I'm B.Tech CSE student {this.props.name}
      </div>
    )
  }
}
export default PureComp;