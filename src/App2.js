import React,{Component} from 'react';
import './App.css';
import Person2 from './Person/Person2'

//We can omit.js from the file name

/*function App() {
  return (
    <div className="App">
      <p>
          Hi, My first React APP.
        </p>      
   
    </div>
  );
}*/

class App2 extends Component{
  render(){
    return (
      <div className="App">
        <p>
          Hi, My first React APP          
        </p> 
        <Person2 />
        <Person2 />
        <Person2 />  
    </div>
    );
  }
}

export default App2;
