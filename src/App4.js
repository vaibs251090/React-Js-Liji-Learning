import React,{Component} from 'react';
import './App.css';
import Person4 from './Person/Person4'

class App4 extends Component{
  render(){
    return (
      <div className="App">
        <p>
          Hi, My first React APP          
        </p> 
        <Person4 name="Beryll" age="28"/>
        <Person4 name="Sam" age="27" >Horse Riding</Person4>
        <Person4 name="Sherly" age="28">Reading</Person4>  
    </div>
    );
  }
}

export default App4;
