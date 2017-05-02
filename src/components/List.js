import React from 'react';

import Tasks from './../containers/Tasks'

const List = ({ list, onRemoveList }) => (
  <main>
    <h2>{list.title}</h2>
    <button onClick={onRemoveList}>Remove TODO List</button>
    <Tasks listId={list.id} />
  </main>
);

export default List;
