import warning from '../../utils/warning';
import { SET_AI_LEVEL } from '../../actions/actions.js';

export default function aiLevel(state = 0, action) {
  const acceptedLevel = action.level >= 0 && action.level <= 2 && typeof action.level === 'number';

  switch (action.type) {
    case SET_AI_LEVEL:
      if (!action.level) {
        /* eslint-disable max-len */
        warning(`Reducer.aiLevel: "action.level" must be defined.\nThe level must be a number between 0 and 2 (inclusive)`);
        /* eslint-enable max-len */
        return state;
      }

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
