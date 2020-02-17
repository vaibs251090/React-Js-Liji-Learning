import React,{Component} from 'react';

class Counter extends Component {
    constructor(props) {
     super(props);
     //initializing the state variable count
     this.state = {count: 0 };
     this.onClick = this.onClick.bind(this);
   }
   

   onClick() {
     //changing the state
     this.setState({count: this.state.count + 1});
     //this.setState({count: state.count + 1});
     //On Changing the state it would invoke the render() method
   }
   render() {
     return (
       <div>
         <div>count:{this.state.count}</div>
         <button onClick={this.onClick}>click!</button>
       </div>
     );
   }
 };

 export default Counter;