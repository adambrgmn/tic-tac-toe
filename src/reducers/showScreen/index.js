import warning from '../../utils/warning';
import { screens } from '../../constants';
import { SET_NEXT_SCREEN, RESET_SCREEN } from '../../constants/actionTypes';

/**
 * showScreen controls the view. It tells wich view is active
 * It accepts either menu och game as views.
 *
 * @param {String} state  String representing view
 * @param {Object} action Action object describing the action
 * @param {String}        String representing new state
 */
export default function showScreen(state = screens.menu, action) {
  const acceptedScreens = Object.keys(screens);
  const acceptedScreen = acceptedScreens.reduce((prev, curr) => {
    if (curr === action.screen) return true;
    return prev;
  }, false);

  switch (action.type) {
    case SET_NEXT_SCREEN:
      if (!acceptedScreen) {
        /* eslint-disable max-len */
        warning(`reducer.showScreen: ${action.screen} is not accepted.\nAccepted screens are ${acceptedScreens.join(', ')}`);
        /* eslint-enable max-len */
        return state;
      }

      return action.screen;

    case RESET_SCREEN:
      return screens.menu;

    default:
      return state;
  }
}
