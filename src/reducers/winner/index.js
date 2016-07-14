import { List } from 'immutable';
import warning from '../../utils/warning';
import { CHECK_WINNER, RESET_GAME } from '../../constants/actionTypes';
import getWinner from '../../services/getWinner';

/**
 * winner determines the state of store-field winner
 * It's undefines as long as there are no winner.
 * It returns the winner if it can find one, or draw
 * if all bricks are occupied and no winner can be
 * determined.
 *
 * @param  {String}      state   The previous state
 * @param  {Object}      action  Object of action
 * @return {String/null}         x, o, draw or null (if game not ended)
 */
export default function winner(state = null, action) {
  const acceptedBrick = List.isList(action.brick) && action.brick;

  switch (action.type) {
    case CHECK_WINNER:
      if (action.brick && !acceptedBrick) {
        warning('Reducer.winner: "action.brick" must be an immutable List.');
        return state;
      }
      return getWinner(action.brick);

    case RESET_GAME:
      return null;

    default:
      return state;
  }
}
