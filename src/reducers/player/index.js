import { SET_NEXT_PLAYER, RESET_GAME } from '../../actions/actions.js';

export default function player(state = 'x', action) {
  switch (action.type) {
    case SET_NEXT_PLAYER:
      return state === 'x' ? 'o' : 'x';

    case RESET_GAME:
      return 'x';

    default:
      return state;
  }
}
