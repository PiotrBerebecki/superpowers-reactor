import { combineReducers } from 'redux';

import puzzlesReducer from './views/Puzzles/reducer';

export default combineReducers({
  puzzles: puzzlesReducer,
});
