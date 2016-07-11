import warning from '../../utils/warning';
import { menuStates } from '../../constants';
import { SET_NEXT_MENU_STATE, RESET_MENU } from '../../constants/actionTypes';

/**
 * menu determines the state of the menu.
 * It's a string representing the menu state.
 *
 * @param  {String} state  A string representing state
 * @param  {Object} action An action object
 * @return {String}        A string representing new state
 */
export default function menu(state = menuStates.root, action) {
  const acceptedState = Object.keys(menuStates).reduce((prev, curr) => {
    if (action.next === curr) return true;
    return prev;
  }, false);

  switch (action.type) {
    case SET_NEXT_MENU_STATE:
      if (!acceptedState) {
        /* eslint-disable max-len */
        warning(`Reducer.menu: "${action.next}" is not an accepted state. \nAccepted states are "root", "expanded", "multi", "single"`);
        /* eslint-enable max-len */
        return state;
      }
      return action.next;
    case RESET_MENU:
      return menuStates.root;
    default:
      return state;
  }
}
