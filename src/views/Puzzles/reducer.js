import {
  GET_PUZZLES_SUCCEEDED,
  GET_PUZZLES_FAILED,
  POPULAR,
  LATEST,
  FAVOURITE,
} from './constants';

export default function puzzlesReducer(state = [], action) {
  switch (action.type) {
    case GET_PUZZLES_SUCCEEDED:
      return action.payload;
    case GET_PUZZLES_FAILED:
      return action.payload;
    default:
      return state;
  }
}
