export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('idsOfFavouritePuzzles');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    // let reducers initilise the application
    return undefined;
  }
};

export const saveState = state => {
  try {
    const idsOfFavouritePuzzles = state.puzzles
      .filter(puzzle => puzzle.isFavourite)
      .map(puzzle => puzzle.id);

    const serializedState = JSON.stringify(idsOfFavouritePuzzles);
    localStorage.setItem('idsOfFavouritePuzzles', idsOfFavouritePuzzles);
  } catch (e) {
    console.log('errir');
    // ignore write errors
  }
};
