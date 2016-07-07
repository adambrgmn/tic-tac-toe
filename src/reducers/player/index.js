import { SET_NEXT_PLAYER, RESET_GAME } from '../../constants/actionTypes';
import { players } from '../../constants';

export default function player(state = players.x, action) {
  switch (action.type) {
    case SET_NEXT_PLAYER:
      return state === players.x ? players.o : players.x;

    case RESET_GAME:
      return players.x;

    default:
      return state;
  }
}
