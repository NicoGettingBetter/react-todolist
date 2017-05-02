import lists from './../reducers/lists';

describe('lists', () => {
  it('add list', () => {
    const prevState = [];
    const action = { type: 'ADD_LIST', list: { id: 0, title: 'title' }};
    const nextState = [{ id: 0, title: 'title' }];

    expect(lists(prevState, action)).toEqual(nextState);
  })

  it('remove list', () => {
    const prevState = [{ id: 0, title: 'title' }];
    const action = { type: 'REMOVE_LIST', list: { id: 0 }};
    const nextState = [];

    expect(lists(prevState, action)).toEqual(nextState);  
  })
})
