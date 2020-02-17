import React from 'react';

//Declared the list as a different variable
const list = ['Alberata', 'Illinois', 'San Jose'];
const SimpleList2 = () => (
  <ul>
    <React.Fragment>
    {list.map(function(item) {
      return <li key={item}>{item}</li>;
    })}
    </React.Fragment>
  </ul>
);
  export default SimpleList2;
