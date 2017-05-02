import React from 'react';

const Lists = ({ children, onAddList }) => {
  let input;
  const onClick = () => {
    onAddList(input.value);
    input.value = '';
  }

  return (
    <main>
      <input type='text' ref={(node) => input = node} />
      <button onClick={onClick}>Add TODO List</button>
      { children }
    </main>
  )
};

export default Lists;
