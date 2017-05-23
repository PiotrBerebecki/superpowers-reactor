import {
  GET_PUZZLES_SUCCEEDED,
  GET_PUZZLES_FAILED,
  POPULAR,
  LATEST,
  FAVOURITE,
  TOGGLE_FAVOURITE,
  TOGGLE_FAVOURITE_SUCCEEDED,
  TOGGLE_FAVOURITE_FAILED,
} from './constants';

export default function puzzlesReducer(state = [], action) {
  switch (action.type) {
    case GET_PUZZLES_SUCCEEDED:
      return action.payload;
    case GET_PUZZLES_FAILED:
      return action.payload;
    case TOGGLE_FAVOURITE_SUCCEEDED:
      return state.map(puzzle => {
        if (puzzle.id === action.payload) {
          return { ...puzzle, isFavourite: !puzzle.isFavourite };
        }
        return puzzle;
      });
    case TOGGLE_FAVOURITE_FAILED:
      return state;
    default:
      return state;
  }
}
