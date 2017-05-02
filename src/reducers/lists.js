const lists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, action.list]
    case 'REMOVE_LIST':
      return state.filter((list) => list.id !== action.list.id)
    default:
      return state
  }
};

export default lists;
