import React from 'react';

//Creating a List of Objects
const list = [
  {
    id: 'RW198889',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'DD199001',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];
const nestedLists = [list, list];
const NestedList5 = () => (
  <ul>
    {nestedLists.map((nestedList, index) => (
      <ul key={index}>
        <h4>List {index + 1}</h4>
        {nestedList.map(item => (
          <li key={item.id}>
            <div>{item.id}</div>
            <div>{item.firstname}</div>
            <div>{item.lastname}</div>
            <div>{item.year}</div>
          </li>
        ))}
      </ul>
    ))}
  </ul>
);
export default NestedList5;

