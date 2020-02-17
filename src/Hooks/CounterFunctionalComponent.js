import React from 'react'

function CounterFunctionalComponent() {
  const [count, setCount] = React.useState(0);
  return (
    <div> <h3>{count}</h3>
      <button onClick={() => setCount(1)}>
        Click me to set Counter to 1!
      </button>
      <button onClick={() => setCount(count + 1)}>Click me to Increment the Count</button> 
    </div>
  );
}

export default CounterFunctionalComponent;