import React from 'react';

//Components are typically named as Uppercase as lowercase is reserved for html
/*
function person(){
    return <h2></h2>
}

//Second Option
var person=function(){
    return <h2>Person</h2>
}
*/
//Working with Dynamic content in JSX
const person2 = () => {
    return (<p>I am a person {Math.floor(Math.random()*30)} years in age</p>);

};

export default person2;