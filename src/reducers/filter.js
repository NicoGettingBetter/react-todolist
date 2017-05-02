const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'ACTIVE':
    case 'COMPLETED':
    case 'ALL':
      return action.type;
    default:
      return state;
  }
}

export default filter;
