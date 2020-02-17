import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"; 

import './index.css';
//import App from './App';
//import App1 from './App1';
//import App2 from './App2';
//import App3 from './App3';
//import App4 from './App4';
//import AppEvent1 from './ButtonEvents/AppEvent1';
//import AppEvent2 from './ButtonEvents/AppEvent2';
//import Counter from './StateExamples/Counter';
//import Counter_v2 from './StateExamples/Counter_v2';
//import CounterLifeCycle from './StateExamples/CounterLifeCycle';
//import CounterFunctionalComponent from './Hooks/CounterFunctionalComponent';
//import IncrementCounter from './Hooks/IncrementCounter';
//import Message from './Hooks/Messages';
//import StaticList from './ListExamples/StaticList';
import SimpleList1 from './ListExamples/SimpleList1';
//import SimpleList2 from './ListExamples/SimpleList2';
//import SimpleList3 from './ListExamples/SimpleList3';
//import ObjectList4 from './ListExamples/ObjectList4';
//import NestedList5 from './ListExamples/NestedList5';
//import ListWithAddItem6 from './ListExamples/ListWithAddItem6';
//import ListWithUpdateItem7 from './ListExamples/ListWithUpdateItem7';
//import ListWithRemoveItem8 from './ListExamples/ListWithRemoveItem8';
//import ScrollToItemWithinList9 from './ListExamples/ScrollToItemWithinList9';
//import ScrollToItemOutsideList10 from './ListExamples/ScrollToItemOutsideList10';
//import FilterableReactList11 from './ListExamples/FilterableReactList11';
//import NameFormControlled1 from './FormExamples/NameFormControlled1';
//import NameFormUncontrolled2 from './FormExamples/NameFormUncontrolled2';
//import SimpleLoginForm3 from './FormExamples/SimpleLoginForm3';
//import SimpleLoginFormValidation3_1 from './FormExamples/SimpleLoginFormValidation3_1';
//import SimpleLoginFormValidationErrors3_2 from './FormExamples/SimpleLoginFormValidationErrors3_2';
//import FormSelectOption3 from './FormExamples/FormSelectOption3'; 
//import BasicForm4 from './FormExamples/BasicForm4'; 
//import CompleteFormExample5 from './FormExamples/CompleteFormExample5';
//import BasicFormValidation6 from './FormExamples/BasicFormValidation6'; 
//import MasterForm from './FormExamples//MultiForm/MasterForm';

//Working with JSON
//import SocialMediaList from './SocialMediaList';
//import Experiences from './Experiences';
//import Skills from './Skills';

//Routing Examples
//import SimpleRouting1 from './RoutingExamples/SimpleRouting1';

//RESTAPI
//import RESTAPIApp from './RESTExamples/RESTAPIApp'; 

//import LoginForm from './Hooks/LoginForm';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App1 />, document.getElementById('root'));
//ReactDOM.render(<App1 />, document.getElementById('root'));
//ReactDOM.render(<App2 />, document.getElementById('root'));
//ReactDOM.render(<App3 />, document.getElementById('root'));
//ReactDOM.render(<App4 />, document.getElementById('root'));
//ReactDOM.render(<AppEvent1 />, document.getElementById('root'));
//ReactDOM.render(<AppEvent2 />, document.getElementById('root'));
//ReactDOM.render(<Counter />, document.getElementById('root'));
//ReactDOM.render(<Counter_v2 />, document.getElementById('root'));
//ReactDOM.render(<CounterLifeCycle />, document.getElementById('root'));
//ReactDOM.render(<IncrementCounter />, document.getElementById('root'));
//ReactDOM.render(<CounterFunctionalComponent />, document.getElementById('root'));
//ReactDOM.render(<StaticList />, document.getElementById('root'));
ReactDOM.render(<SimpleList1 />, document.getElementById('root'));
//ReactDOM.render(<SimpleList2 />, document.getElementById('root'));
//ReactDOM.render(<SimpleList3 />, document.getElementById('root'));
//ReactDOM.render(<ObjectList4 />, document.getElementById('root'));
//ReactDOM.render(<NestedList5 />, document.getElementById('root'));
//ReactDOM.render(<ListWithAddItem6 />, document.getElementById('root'));
//ReactDOM.render(<ListWithUpdateItem7 />, document.getElementById('root'));
//ReactDOM.render(<ListWithRemoveItem8 />, document.getElementById('root'));
//ReactDOM.render(<ScrollToItemWithinList9 />, document.getElementById('root'));
//ReactDOM.render(<ScrollToItemOutsideList10 />, document.getElementById('root'));

var CONTACTS = [
    {name: 'Tom Jackson', phone: '555-444-333', email: 'tom@gmail.com'},
    {name: 'Mike James', phone: '555-777-888', email: 'mikejames@gmail.com'},
    {name: 'Janet Larson', phone: '555-222-111', email: 'janetlarson@gmail.com'},
    {name: 'Clark Thompson', phone: '555-444-333', email: 'clark123@gmail.com'},
    {name: 'Emma Page', phone: '555-444-333', email: 'emma1page@gmail.com'},
    
  ];
//ReactDOM.render(<FilterableReactList11 contacts={CONTACTS} />,document.getElementById('root'));

//ReactFormExamples
//ReactDOM.render(<NameFormControlled1 />, document.getElementById('root'));
//ReactDOM.render(<NameFormUncontrolled2 />, document.getElementById('root'));
//ReactDOM.render(<SimpleLoginForm3 />,document.getElementById('root'));
//ReactDOM.render(<SimpleLoginFormValidation3_1 />,document.getElementById('root'));
//ReactDOM.render(<SimpleLoginFormValidationErrors3_2 />,document.getElementById('root'));
//ReactDOM.render(<FormSelectOption3 />, document.getElementById('root'));
//ReactDOM.render(<BasicForm4 />, document.getElementById('root'));
//ReactDOM.render(<CompleteFormExample5 />, document.getElementById('root'));
//ReactDOM.render(<BasicFormValidation6 />, document.getElementById('root'));
//ReactDOM.render(<MasterForm />,document.getElementById('root'));
//Dealing with JSON Data
//ReactDOM.render(<div><SocialMediaList/><Experiences /><Skills /></div>, document.getElementById('root'));


//Routing Examples
/*ReactDOM.render((
  <BrowserRouter>
    <SimpleRouting1 />
  </BrowserRouter>
),*/

//REST Examples
//ReactDOM.render(<RESTAPIApp />, document.getElementById('root'));

//Using Hooks
//ReactDOM.render(<Message />, document.getElementById('root'));

//ReactDOM.render(<LoginForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
