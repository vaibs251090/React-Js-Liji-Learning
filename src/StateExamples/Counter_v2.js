import React,{Component} from 'react';

class Counter_v2 extends Component {
  //No constructor to initialize the state and no bind methods
  state = { count: 0 };   

  onIncrement = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };
  
  onDecrement = () => {
    this.setState(state => ({
      count: state.count - 1
    }));
  };

   render() {
     return (
       <div>
         <div>count:{this.state.count}</div>
         <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
       </div>
     );
   }
 };

 export default Counter_v2;