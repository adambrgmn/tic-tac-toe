import warning from '../../utils/warning';
import { GAME_ENDED, RESET_GAME } from '../../constants/actionTypes';
import { winnerStates } from '../../constants';

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
  const acceptedWinnerState = Object.keys(winnerStates).reduce((prev, curr) => {
    if (curr === action.winner) return true;
    return prev;
  }, false);

  switch (action.type) {
    case GAME_ENDED:
      if (!acceptedWinnerState) {
        /* eslint-disable max-len */
        warning(`Reducer.winner: "action.winner" (${action.winner}) is not accepted.\n Accepted values are ${Object.keys(winnerStates).join(', ')}.`);
        return state;
      }

      return action.winner;

    case RESET_GAME:
      return null;

    default:
      return state;
  }
}
