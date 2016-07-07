import warning from '../../utils/warning';
import {
  SET_NEXT_SCREEN,
  RESET_SCREEN,
  screens,
} from '../../actions/actions.js';

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
