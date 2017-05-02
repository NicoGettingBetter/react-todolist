import filter from './../reducers/filter';

describe('filter', () => {
  it('adds filter', () => {
    const prevState = 'ALL';
    const action = { type: 'ACTIVE' };
    const nextState = 'ACTIVE';

    expect(filter(prevState, action)).toEqual(nextState);
  })

  it('adds filter', () => {
    const prevState = 'ACTIVE';
    const action = { type: 'COMPLETED' };
    const nextState = 'COMPLETED';

    expect(filter(prevState, action)).toEqual(nextState);
  })

  it('adds filter', () => {
    const prevState = 'COMPLETED';
    const action = { type: 'ALL' };
    const nextState = 'ALL';

    expect(filter(prevState, action)).toEqual(nextState);
  })
})
