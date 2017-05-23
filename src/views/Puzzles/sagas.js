import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_PUZZLES,
  GET_PUZZLES_SUCCEEDED,
  GET_PUZZLES_FAILED,
  POPULAR,
  LATEST,
  FAVOURITE,
  TOGGLE_FAVOURITE,
  TOGGLE_FAVOURITE_SUCCEEDED,
  TOGGLE_FAVOURITE_FAILED,
} from './constants';
import preloadedPuzzles from './../../database/puzzles';
import { loadState } from './../../localStorage';

export function getPuzzles(category) {
  return {
    type: GET_PUZZLES,
    category,
  };
}

export function toggleFavourite(id) {
  return {
    type: TOGGLE_FAVOURITE,
    id,
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

export function* handleToggleFavourite(action) {
  try {
    yield put({ type: TOGGLE_FAVOURITE_SUCCEEDED, payload: action.id });
  } catch (e) {
    yield put({
      type: TOGGLE_FAVOURITE_FAILED,
      payload: 'Sorry, we were unable to save to your current selection',
    });
  }
  yield;
}

export default function* puzzlesSaga() {
  yield [
    takeLatest(GET_PUZZLES, handlePuzzlesSaga),
    takeLatest(TOGGLE_FAVOURITE, handleToggleFavourite),
  ];
}
