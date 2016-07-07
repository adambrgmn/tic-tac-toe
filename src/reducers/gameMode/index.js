import warning from '../../utils/warning';
import { SET_GAME_MODE, gameModes } from '../../actions/actions.js';

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
  const acceptedMode = Object.keys(gameModes).reduce((prev, curr) => {
    if (action.mode === curr) return true;
    return prev;
  }, false);

  switch (action.type) {
    case SET_GAME_MODE:
      if (!action.mode) {
        /* eslint-disable max-len */
        warning(`Reducer.gameMode: "action.mode" must be defined. \nAccepted modes are "single" or "multi"`);
        /* eslint-enable max-len */
        return state;
      }

      if (!acceptedMode) {
        /* eslint-disable max-len */
        warning(`Reducer.gameMode: "${action.mode}" is not an accepted mode. \nAccepted modes are "single" or "multi"`);
        /* eslint-enable max-len */
        return state;
      }

      return action.mode;
    default:
      return state;
  }
}
