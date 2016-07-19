import warning from '../../utils/warning';
import { HIDE_MESSAGE, PRINT_NEW_MESSAGE } from '../../constants/actionTypes';

export default function message(state = {
  show: false,
  message: null,
}, action) {
  switch (action.type) {
    case PRINT_NEW_MESSAGE:
      if (!action.message) {
        warning('Reducer: message: "action.message" must not be empty.');
        return state;
      }

      return {
        ...state,
        message: action.message,
        show: true,
      };

    case HIDE_MESSAGE:
      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
}
