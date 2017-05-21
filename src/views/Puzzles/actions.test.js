import { call, put, take, takeLatest } from 'redux-saga/effects';

import puzzlesSaga, {
  getPuzzles,
  fetchPuzzles,
  handlePuzzlesSaga,
  sortPuzzles,
} from './actions';
import {
  GET_PUZZLES,
  GET_PUZZLES_SUCCEEDED,
  GET_PUZZLES_FAILED,
  POPULAR,
  LATEST,
  FAVOURITE,
} from './constants';

const testTitle = 'testTitle';
const testCategory = 'testCategory';

describe('getPuzzles', () => {
  it('return action object', () => {
    expect(getPuzzles(testCategory)).toEqual({
      type: GET_PUZZLES,
      category: testCategory,
    });
  });
});

describe('fetchPuzzles', () => {
  it('runs side effects correctly', () => {
    expect.assertions(1);
    return fetchPuzzles().then(res => {
      expect(Array.isArray(res)).toBe(true);
    });
  });
});

describe('handlePuzzlesSaga', () => {
  const action = { category: testCategory };

  it('runs side effects correctly', () => {
    const iterator = handlePuzzlesSaga(action);

    let result = iterator.next();
    expect(result.value).toEqual(call(fetchPuzzles, action.category));

    result = iterator.next();
    expect(result.value).toEqual(
      put({ type: GET_PUZZLES_SUCCEEDED, payload: undefined })
    );
  });

  it('handles errors', () => {
    const iterator = handlePuzzlesSaga(action);
    iterator.next();

    const error = {};
    expect(iterator.throw(error).value).toEqual(
      put({
        type: GET_PUZZLES_FAILED,
        payload: [
          {
            title: 'Sorry, there has been a problem fetching the requested information.',
          },
        ],
      })
    );
  });
});

describe('puzzlesSaga', () => {
  it('runs side effects correctly', () => {
    const iterator = puzzlesSaga();
    let result = iterator.next();
    expect(result.value).toEqual(takeLatest(GET_PUZZLES, handlePuzzlesSaga));
  });
});

describe('sortPuzzles', () => {
  const puzzlesToSort = [
    {
      id: 1,
      title: 'title1 POPULAR FAVOURITE',
      text: 'text1',
      favCount: 2,
      isUserFavourite: true,
    },
    {
      id: 2,
      title: 'title2 NEW',
      text: 'text2',
      favCount: 1,
      isUserFavourite: false,
    },
  ];

  it('sorts puzzles by popularity', () => {
    expect(sortPuzzles(puzzlesToSort, POPULAR)).toEqual(puzzlesToSort);
  });

  it('sorts puzzles by id', () => {
    expect(sortPuzzles(puzzlesToSort, LATEST)).toEqual([
      puzzlesToSort[1],
      puzzlesToSort[0],
    ]);
  });

  it('returns only the puzzles that have been favourited', () => {
    expect(sortPuzzles(puzzlesToSort, FAVOURITE)).toEqual([puzzlesToSort[0]]);
  });

  it('returns original puzzles if invalid category', () => {
    expect(sortPuzzles(puzzlesToSort, 'someCategory')).toEqual(puzzlesToSort);
  });
});
