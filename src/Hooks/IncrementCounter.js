import React,{ useState } from 'react'

// since React 16.8 we can use hooks, which are functions with names starting with use, to add state variables to 
//functional components and instrument the lifecycle methods of classes.
const { useState } = React
//useSate (state) hook, the equivalent of this.state/this.setSate for functional components.


//every Button element has 2 props: increment and onClickFunction
const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}

const IncrementCounter = () => {

  //useState() returns an array, where the first element is the state variable and the second element is a function 
  //to update the value of the variable
  //initializes the count variable at 0 and provides us the setCount() method to update its value.
  const [count, setCount] = useState(0)
  //In subsequent renders (due to a change of state in the component or a parent component), 
  //the argument of the useState hook will be ignored and the current value will be retrieved.

  const incrementCount = increment => {
    setCount(count + increment)
  }

  return (
    <div>
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <span>{count}</span>
    </div>
  )
}

export default IncrementCounter;