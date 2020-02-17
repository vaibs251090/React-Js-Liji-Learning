import React from 'react';

const initialList = [
  { id: 'LR001', name: 'Learn React', complete: false },
  { id: 'LF003', name: 'Learn Firebase', complete: false },
  { id: 'LG002', name: 'Learn GraphQL', complete: false },
];
const ListWithUpdateItem7 = () => {
  const [list, setList] = React.useState(initialList);
  const handleChangeCheckbox = id => {
    setList(
      list.map(item => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => handleChangeCheckbox(item.id)}
            />
            {item.name}
          </label>
        </li>
      ))}
    </ul>
  );
};
export default ListWithUpdateItem7;