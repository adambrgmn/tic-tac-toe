import { List } from 'immutable';
import warning from '../../utils/warning';
import getWinner from '../brick/pickSpotComputer/getLevel2Spot/getMinimaxVal/getWinner';
import { CHECK_WINNER, RESET_GAME } from '../../actions/actions.js';

/**
 * A reducer for winner.
 * It's undefined until either x or o has a
 * winning move, or the brick is full without
 * a winner, in that case it ends with draw.
 */

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
        warning('Reducer.winner: "action.brick" must be a List.');
        return state;
      }
      return getWinner(action.brick);

    case RESET_GAME:
      return null;

    default:
      return state;
  }
}
