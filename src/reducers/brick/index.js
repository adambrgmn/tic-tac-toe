import { List } from 'immutable';

export default function brick(state = List(), action) {
  switch (action.type) {
    case 'OCCUPY_SPOT':
      if (state.get(action.spot)) return state;
      return state.set(action.spot, action.player);
    default:
      return state;
  }
}
