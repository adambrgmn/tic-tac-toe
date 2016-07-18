import warning from '../../utils/warning';
import { SET_AI_LEVEL } from '../../constants/actionTypes';
import { aiLevels } from '../../constants';

/**
 * aiLevel determines the state of store-field aiLevel.
 * The standard is level aiLevel.zero (0).
 * It possible to set the level to a new level.
 *
 * @param  {Number} state   The level, number between 0 and 2
 * @param  {Object} action  Action object, must contain type
 * @return {Number}         Returns new state
 */
export default function aiLevel(state = aiLevels.zero, action) {
  const acceptedLevel = action.level >= aiLevels.zero &&
    action.level <= aiLevels.two &&
    typeof action.level === 'number';

  switch (action.type) {
    case SET_AI_LEVEL:
      if (!acceptedLevel) {
        /* eslint-disable max-len */
        warning(`Reducer.aiLevel: ${action.level} is not accepted. \n The level must be a number between 0 and 2 (inclusive)`);
        /* eslint-enable max-len */
        return state;
      }

      return action.level;
    default:
      return state;
  }
}
