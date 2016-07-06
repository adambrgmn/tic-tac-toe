import { List } from 'immutable';
import { PICK_SPOT_PLAYER, PICK_SPOT_COMPUTER } from '../../actions/actions.js';

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
  switch (action.type) {
    case PICK_SPOT_PLAYER:
      // Ignore move if the player wants to
      // occupy a already occupied spot
      if (state.get(action.spot)) return state;

      // Return state with player occupying the new spot
      return state.set(action.spot, action.player);

    case PICK_SPOT_COMPUTER:
      // Return state with the computer picking a random spot
      return state.set(pickSpotComputer(state, action), action.player);

    default:
      return state;
  }
}
