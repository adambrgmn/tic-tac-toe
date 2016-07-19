import store from '../../store';

/**
 * getWinner returns the winner, if there
 * is one. Otherwise, if all spots are taken,
 * it returns draw. If no condition matches
 * it will return null.
 *
 * @param  {List} [brick] An immutable List of spots, if
 * none is provided it will get the brick from the store
 *
 * @return {String|null} The winner (x or o), draw or null
 */
export default function getWinner(brick = store.getState().brick) {
  // Check rows
  for (let i = 0; i <= 6; i = i + 3) {
    if (
      brick.get(i) &&
      brick.get(i) === brick.get(i + 1) &&
      brick.get(i) === brick.get(i + 2)
    ) {
      return brick.get(i);
    }
  }

  // Check columns
  for (let i = 0; i <= 2; i++) {
    if (
      brick.get(i) &&
      brick.get(i) === brick.get(i + 3) &&
      brick.get(i + 3) === brick.get(i + 6)
    ) {
      return brick.get(i);
    }
  }

  // Check diagonals
  for (let i = 0, j = 4; i <= 2; i = i + 2, j = j - 2) {
    if (
      brick.get(i) &&
      brick.get(i) === brick.get(i + j) &&
      brick.get(i + j) === brick.get(i + 2 * j)
    ) {
      return brick.get(i);
    }
  }

  const nonFreeSpots = brick.filter(s => s);
  if (nonFreeSpots.size === 9) return 'draw';

  return null;
}
