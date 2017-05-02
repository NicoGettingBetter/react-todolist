import React from 'react';

const Tasks = ({ children, onAddTask }) => {
  let input;
  const onClick = () => {
    onAddTask(input.value);
    input.value = '';
  }

  return (
    <main>
      <input type='text' ref={(node) => input = node} />
      <button onClick={onClick}>Add task</button>
      { children }
    </main>
  )
}

export default Tasks;
