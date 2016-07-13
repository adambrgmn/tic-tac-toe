import store from '../../store';

/**
 * getWinner returns the winner, if there
 * is one. Otherwise, if all spots are taken,
 * it returns draw. If no condition matches
 * it will return null.
 *
 * @param  {List}        brick  An immutable List of spots
 * @return {String|null}        The winner (x or o), draw or null
 */
export default function getWinner(brick) {
  let state;
  if (brick) state = brick;
  if (!brick) {
    state = store.getState().brick;
  }

  // Check rows
  for (let i = 0; i <= 6; i = i + 3) {
    if (
      state.get(i) &&
      state.get(i) === state.get(i + 1) &&
      state.get(i) === state.get(i + 2)
    ) {
      return state.get(i);
    }
  }

  // Check columns
  for (let i = 0; i <= 2; i++) {
    if (
      state.get(i) &&
      state.get(i) === state.get(i + 3) &&
      state.get(i + 3) === state.get(i + 6)
    ) {
      return state.get(i);
    }
  }

  // Check diagonals
  for (let i = 0, j = 4; i <= 2; i = i + 2, j = j - 2) {
    if (
      state.get(i) &&
      state.get(i) === state.get(i + j) &&
      state.get(i + j) === state.get(i + 2 * j)
    ) {
      return state.get(i);
    }
  }

  const nonFreeSpots = state.filter(s => s);
  if (nonFreeSpots.size === 9) return 'draw';

  return null;
}
