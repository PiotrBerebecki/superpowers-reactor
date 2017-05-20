import { GET_PUZZLES } from './constants';

export function getPuzzles(category) {
  return {
    type: GET_PUZZLES,
    category,
  };
}
