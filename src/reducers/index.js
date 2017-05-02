import { combineReducers } from 'redux';

import lists from './lists';
import tasks from './tasks';
import filter from './filter';

const appReducer = combineReducers({
  lists,
  tasks,
  filter
});

export default appReducer;
