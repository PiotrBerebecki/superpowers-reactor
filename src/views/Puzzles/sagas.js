import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_PUZZLES,
  GET_PUZZLES_SUCCEEDED,
  GET_PUZZLES_FAILED,
  POPULAR,
  LATEST,
  FAVOURITE,
} from './constants';
import preloadedPuzzles from './../../database/puzzles';

export function getPuzzles(category) {
  return {
    type: GET_PUZZLES,
    category,
  };
}

// to be replaced with real API
export function fetchPuzzles(category) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(preloadedPuzzles);
    }, 0);
  });
}

export function sortPuzzles(puzzles, category) {
  switch (category) {
    case POPULAR:
      return [...puzzles].sort((a, b) => b.favCount - a.favCount);
    case LATEST:
      return [...puzzles].sort((a, b) => b.id - a.id);
    case FAVOURITE:
      return puzzles.filter(puzzle => puzzle.isFavourite);
    default:
      return puzzles;
  }
}

export function* handlePuzzlesSaga(action) {
  try {
    const puzzles = yield call(fetchPuzzles, action.category);

    const sortedPuzzles = sortPuzzles(puzzles, action.category);
    yield put({ type: GET_PUZZLES_SUCCEEDED, payload: sortedPuzzles });
  } catch (e) {
    yield put({
      type: GET_PUZZLES_FAILED,
      payload: [
        {
          title: 'Sorry, there has been a problem fetching the requested information.',
        },
      ],
    });
  }
}

export default function* puzzlesSaga() {
  yield takeLatest(GET_PUZZLES, handlePuzzlesSaga);
}
