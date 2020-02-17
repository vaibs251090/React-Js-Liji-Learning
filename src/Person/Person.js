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
//Using ES6 function syntax
const person = () => {
    return <p>I am a person</p>
};

export default person;