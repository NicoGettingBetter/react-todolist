let nextId = 0;

export const addList = (title) => ({
  type: 'ADD_LIST',
  list: {
    id: nextId++,
    title
  }
});

export const removeList = (id) => ({
  type: 'REMOVE_LIST',
  list: {
    id
  }
});