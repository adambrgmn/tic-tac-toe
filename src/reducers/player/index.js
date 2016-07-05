export default function player(state = 'x', action) {
  switch (action.type) {
    case 'GET_NEXT_PLAYER':
      return state === 'x' ? 'o' : 'x';
    default:
      return state;
  }
}
