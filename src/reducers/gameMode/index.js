import { SET_GAME_MODE } from '../../actions/actions.js';

/**
 * gameMode defines the state property gameMode
 * It describes the type of game played, either
 * mulitplayer och singleplayer
 *
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
export default function gameMode(state = 'single', action) {
  switch (action.type) {
    case SET_GAME_MODE:
      return action.mode;
    default:
      return state;
  }
}
