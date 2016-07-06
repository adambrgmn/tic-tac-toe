import { SET_GAME_MODE } from '../../actions/actions.js';

/**
 * gameMode defines the state property gameMode
 * It describes the type of game played, either
 * mulitplayer och singleplayer
 *
 * @param  {String} state  String describing the game mode
 * @param  {Object} action Action object describing the action
 * @return {String}        String representing state
 */
export default function gameMode(state = 'single', action) {
  switch (action.type) {
    case SET_GAME_MODE:
      return action.mode;
    default:
      return state;
  }
}
