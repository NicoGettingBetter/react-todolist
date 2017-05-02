import React from 'react';

const Task = ({ task, onToggleTask }) => (
  <div onClick={onToggleTask} className={task.completed ? 'line-through' : ''}>
    {task.text}
  </div>
);

export default Task;
