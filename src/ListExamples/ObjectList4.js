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
const ObjectList4 = () => (
  <ul>
    {list.map(item => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
      </li>
    ))}
  </ul>
);
export default ObjectList4;
