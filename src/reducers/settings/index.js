import { SHOW_SETTINGS, HIDE_SETTINGS } from '../../constants/actionTypes';

/**
 * settings deterimines if to show the settings window or not
 *
 * @param  {Boolean} state  Boolean representing state
 * @param  {Object}  action An action object
 * @return {Boolean}        Return new state
 */
export default function settings(state = false, action) {
  switch (action.type) {
    case SHOW_SETTINGS:
      return true;
    case HIDE_SETTINGS:
      return false;
    default:
      return state;
  }
}
