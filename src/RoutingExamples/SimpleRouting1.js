import React, { Component } from 'react';
import ReactDOM,{render} from 'react-dom';
import {
  Route,
  Link,
  BrowserRouter
} from "react-router-dom"; 

/*const {
    BrowserRouter,
    Route,
    Link
  } = ReactRouterDOM*/
  
  const SimpleRouting1 = () => (
    <div>
      <h1>React Router Example</h1>
      <ul role="nav">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
       
      <div>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/profile' component={Profile} />
      </div>
    </div>
  )
  
  //Defining the Components
  const Dashboard= () => <h2>You are in the Dashboard</h2>
  const Profile= () => <h2>You are in the Profile</h2>

  export default SimpleRouting1;

  