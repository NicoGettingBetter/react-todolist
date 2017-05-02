const task = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...action.task,
        completed: false
      }
    case 'TOGGLE_TASK':
      if (state.id !== action.task.id) {
        return state;
      }
      
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, task(undefined, action)];
    case 'TOGGLE_TASK':
      return state.map((t) => task(t, action));
    case 'REMOVE_TASKS':
      return state.filter((task) => task.listId !== action.list.id);
    default:
      return state;
  }
}

export default tasks;

// helpers

const getFilteredTasks = (state) => (
  (state.tasks || []).filter((task) => {
    switch (state.filter) {
      case 'COMPLETED':
        return task.completed;
      case 'ACTIVE':
        return !task.completed;
      default:
        return true;
    }
  })
)

export const getTasksByListId = (state, listId) => (
  getFilteredTasks(state).filter((task) => task.listId === listId)
)
