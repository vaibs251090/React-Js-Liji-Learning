import React from 'react';

const SimpleList1 = () => (    
    <ul>
      <React.Fragment>
      {//use the built-in JavaScript array map method to iterate over our list items; and to map them from JavaScript primitive to HTML elements
          ['Alberata', 'Illinois', 'San Jose'].map(function(item) {
              //Each element receives a mandatory key prop
              return <li key={item}>{item}</li>;
      })}
    </React.Fragment>
    </ul>
    
  );

  export default SimpleList1;
