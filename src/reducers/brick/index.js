import { List } from 'immutable';
import warning from '../../utils/warning';
import {
  PICK_SPOT,
  RESET_GAME,
} from '../../constants/actionTypes';

/**
 * A reducer for brick.
 * Brick starts with an immutable List of
 * 9 undefined bricks. These bricks can then
 * be occipied by either a physical player
 * or the computer.
 */

/**
 * brick determines the state of store-field brick.
 * It starts with an immutable List of 9 undefined
 * spots. The actions puts a player (x or o) on
 * a spot.
 *
 * @param  {List}   state   List of spots, occupied or not
 * @param  {Object} action  Action object, must contain type
 * @return {List}           Returns new state
 */
export default function brick(state = List().setSize(9), action) {
  const acceptedPlayer = action.player === 'x' || action.player === 'o';
  const acceptedSpot = action.spot >= 0 && action.spot <= 9;

  switch (action.type) {
    case PICK_SPOT:
      if (!acceptedPlayer) {
        /* eslint-disable max-len */
        warning(`Reducer.brick: "action.player" (${action.player}) must be an accepted player. \nAccepted players are "x" or "o"`);
        /* eslint-enable max-len */
        return state;
      }

      if (!acceptedSpot) {
        /* eslint-disable max-len */
        warning(`Reducer.brick: "action.spot" must be an accepted spot. \nAccepted spots are 0 to 9 (inclusive)`);
        /* eslint-enable max-len */
        return state;
      }

      if (state.get(action.spot)) return state;
      return state.set(action.spot, action.player);

    case RESET_GAME:
      return List().setSize(9);

    default:
      return state;
  }
}
