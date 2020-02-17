import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person'

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

class App extends Component{
  render(){
    return (
      <div className="App">
        <p>
          Hi, My first React APP          
        </p> 
        <Person />
    </div>
    );
  }
}

export default App;
