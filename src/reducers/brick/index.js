import { List } from 'immutable';
import warning from '../../utils/warning';
import { PICK_SPOT_PLAYER, PICK_SPOT_COMPUTER, RESET_GAME } from '../../actions/actions.js';

import pickSpotComputer from './pickSpotComputer';
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
  const acceptedLevel = action.level >= 0 && action.level <= 2;

  switch (action.type) {
    case PICK_SPOT_PLAYER:
      if (!acceptedPlayer) {
        /* eslint-disable max-len */
        warning(`Reducer.brick: "action.player" must an accepted player. \nAccepted players are "x" or "o"`);
        /* eslint-enable max-len */
        return state;
      }

      if (!acceptedSpot) {
        /* eslint-disable max-len */
        warning(`Reducer.brick: "action.spot" must be an accepted spot. \nAccepted spots are 0 to 9 (inclusive)`);
        /* eslint-enable max-len */
        return state;
      }

      // Ignore move if the player wants to
      // occupy a already occupied spot
      if (state.get(action.spot)) return state;

      // Return state with player occupying the new spot
      // action must contain player and spot
      return state.set(action.spot, action.player);

    case PICK_SPOT_COMPUTER:
      if (!acceptedPlayer) {
        /* eslint-disable max-len */
        warning(`Reducer.brick: "action.player" must be an accepted player. \nAccepted players are "x" or "o"`);
        /* eslint-enable max-len */
        return state;
      }

      if (!acceptedLevel) {
        /* eslint-disable max-len */
        warning(`Reducer.brick: "action.level" must be an accepted level. \nAccepted levels are 0 to 2 (inclusive)`);
        /* eslint-enable max-len */
        return state;
      }

      // Return state with the computer picking a random spot
      // action must contain player and level
      return state.set(pickSpotComputer(state, action), action.player);

    case RESET_GAME:
      return List().setSize(9);

    default:
      return state;
  }
}
