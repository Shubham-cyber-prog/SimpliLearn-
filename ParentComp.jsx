import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Geeta University "
      }
    }
    
    componentDidMount(){
        setInterval (() => {
            this.setState({
                name:"Geeta University"
            });
        },3000);
    } 

  render() {
    console.log("Parent Component render");
    return (
      <div>
        I'm the Parent Component
        <RegComp name={this.state.name}/>
        <PureComp name = {this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
