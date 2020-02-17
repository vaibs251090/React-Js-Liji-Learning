import React from 'react';

//Declared the list as a different variable
const list = ['Alberata', 'Illinois', 'San Jose'];
const SimpleList3 = () => (
  <ul>
    <React.Fragment>
    {//Using arrow function in the map
      list.map(item => {
      return <li key={item}>{item}</li>;
        // You could also ignore the return keyword and make it as below:
      //<li key={item}>{item}</li>
    })}
    </React.Fragment>
  </ul>
);
  export default SimpleList3;
