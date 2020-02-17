import React, { Component } from 'react';

class AppEvent1 extends Component {
  
    constructor(props) {
      super(props);
    }
  
    sayHello() {
      alert('Hello! there');
    }
    
    render(){
        return (
            <button onClick={this.sayHello}>Click me!</button>
            );
        }   
    
    }
  
  export default AppEvent1;