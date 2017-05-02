let nextId = 0;

export const addTask = (listId, text) => ({
  type: 'ADD_TASK',
  task: {
    id: nextId++,
    listId,
    text
  }
});

export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  task: {
    id
  }
})

export const removeTasksByListId = (listId) => ({
  type: 'REMOVE_TASKS',
  list: {
    id: listId
  }
})
