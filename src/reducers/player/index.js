import { PICK_SPOT, SET_NEXT_PLAYER, RESET_GAME } from '../../constants/actionTypes';
import { players } from '../../constants';

/**
 * player determines the state of player.
 * It takes an action argument and returns the new player
 *
 * @param  {String} state  String representing old state
 * @param  {Object} action An action object
 * @return {String}        String representing new state
 */
export default function player(state = players.x, action) {
  switch (action.type) {
    case PICK_SPOT:
    case SET_NEXT_PLAYER:
      return state === players.x ? players.o : players.x;

    case RESET_GAME:
      return players.x;

    default:
      return state;
  }
}
