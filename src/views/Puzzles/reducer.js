import { GET_PUZZLES } from './constants';

function puzzlesReducer(state = [], action) {
  switch (action.type) {
    case GET_PUZZLES:
      return state;
    default:
      return state;
  }
}

export default puzzlesReducer;
