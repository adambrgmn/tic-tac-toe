import { List } from 'immutable';
import warning from '../../utils/warning';
import { CHECK_WINNER } from '../../actions/actions.js';

/**
 * A reducer for winner.
 * It's undefined until either x or o has a
 * winning move, or the brick is full without
 * a winner, in that case it ends with draw.
 */

/**
 * getWinner returns the winner, if there
 * is one. Otherwise, if all spots are taken,
 * it returns draw. If no condition matches
 * it will return undefined.
 *
 * @param  {List}   brick  An immutable List of spots
 * @return {String}        The winner (x or o), draw or undefined
 */
export const getWinner = (brick) => {
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

  const freeSpots = brick.filter(s => s);
  if (freeSpots.size === 9) return 'draw';

  return null;
};

/**
 * winner determines the state of store-field winner
 * It's undefines as long as there are no winner.
 * It returns the winner if it can find one, or draw
 * if all bricks are occupied and no winner can be
 * determined.
 *
 * @param  {String} state   The previous state
 * @param  {Object} action  Object of action
 * @return {String}         null, x, o or draw
 */
export default function winner(state = null, action) {
  const acceptedBrick = List.isList(action.brick) && action.brick;

  switch (action.type) {
    case CHECK_WINNER:
      if (!acceptedBrick) {
        if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
          /* eslint-disable max-len */
          warning('Reducer.winner: "action.brick" must be a List.');
          /* eslint-enable max-len */
        }
        return state;
      }
      return getWinner(action.brick);

    default:
      return state;
  }
}
