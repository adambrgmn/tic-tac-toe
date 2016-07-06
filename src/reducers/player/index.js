import { SET_NEXT_PLAYER } from '../../actions/actions.js';

export default function player(state = 'x', action) {
  switch (action.type) {
    case SET_NEXT_PLAYER:
      return state === 'x' ? 'o' : 'x';
    default:
      return state;
  }
}
