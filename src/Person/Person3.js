import React from 'react';
import { tsPropertySignature } from '@babel/types';


//Working with Dynamic content in JSX. Using props to fetch the age and name
const person3 = (props) => {
    return (<p>I am {props.name} and I am {props.age} years old</p>);
};

export default person3;