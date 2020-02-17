import React from 'react';
import { tsPropertySignature } from '@babel/types';


//Accessing Children Property
const person4 = (props) => {
    return (<div>
            <p>I am {props.name} and I am {props.age} years old</p>
            <p>Hobbies: {props.children}</p>
        </div>);
};

export default person4;