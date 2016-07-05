export default function finalScore(state = undefined, action) {
  switch (action.type) {
    case 'GET_FINAL_SCORE':
      switch (action.winner) {
        case 'x':
          return 10 - action.moves;
        case 'o':
          return -10 + action.moves;
        case 'draw':
          return 0;
        default:
          return undefined;
      }
    default:
      return state;
  }
}
