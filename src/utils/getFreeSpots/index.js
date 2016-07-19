import { List } from 'immutable';

/**
 * getFreeSpots takes the state and returns
 * an immutable list with indices of free
 * spots to test agianst.
 *
 * @param  {List} state List of current state
 * @return {List}       List of free spot indices
 */
export default function getFreeSpots(state) {
  return state.reduce((prev, curr, i) => {
    if (!curr) return prev.push(i);
    return prev;
  }, List());
}
