import React,{Component} from 'react';
import './App.css';
import Person3 from './Person/Person3'

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

class App3 extends Component{
  render(){
    return (
      <div className="App">
        <p>
          Hi, My first React APP          
        </p> 
        <Person3 name="Beryll" age="28"/>
        <Person3 name="Sam" age="27" />
        <Person3 name="Sherly" age="28"/>  
    </div>
    );
  }
}

export default App3;
