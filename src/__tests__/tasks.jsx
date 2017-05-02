import tasks from './../reducers/tasks';

describe('tasks', () => {
  it('add tasks', () => {
    const prevState = [];
    const action = { type: 'ADD_TASK', task: { id: 0, listId: 0, text: 'text' }};
    const nextState = [{ listId: 0, text: 'text', id: 0, completed: false }];

    expect(tasks(prevState, action)).toEqual(nextState);
  })

  it('toggle task', () => {
    const prevState = [{ listId: 0, text: 'text', id: 0, completed: false }];
    const action = { type: 'TOGGLE_TASK', task: { id: 0 }};
    const nextState = [{ listId: 0, text: 'text', id: 0, completed: true }];

    expect(tasks(prevState, action)).toEqual(nextState);  
  })

  it('remove tasks by list id', () => {
    const prevState = [{ listId: 0, text: 'text', id: 0, completed: false }];
    const action = { type: 'REMOVE_TASKS', list: { id: 0 }};
    const nextState = [];

    expect(tasks(prevState, action)).toEqual(nextState);  
  })
})
