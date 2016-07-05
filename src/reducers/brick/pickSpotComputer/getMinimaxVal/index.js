import { List } from 'immutable';
import { getWinner } from '../../../winner';

const finalScore = (state = undefined, action) => {
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
};

// export default function getMinimaxVal(state, player) {
//   const winner = getWinner(state);
//   const moves = state.filter(spot => spot === player).size;

//   if (winner) return finalScore(undefined, { winner, moves });

//   let score = player === 'x' ? -1000 : 1000;

//   const availablePositions = state.reduce((prev, curr, i) => {
//     if (!curr) return prev.push(i);
//     return prev;
//   }, List());

//   const availableNextStates = availablePositions.map(pos => state.set(pos, player));

//   availableNextStates.forEach((nextState) => {
//     const nextPlayer = player === 'x' ? 'o' : 'x';
//     const nextScore = getMinimaxVal(nextState, nextPlayer);

//     if (player === 'x' && nextScore > score) score = nextScore;
//     if (player !== 'x' && nextScore < score) score = nextScore;
//   });

//   return score;
// }

export default function getMinimaxVal(state, player) {
  const ai = player;
  function minimaxVal(s, p) {
    const playerIsAi = p === ai;
    const winner = getWinner(s);
    const moves = s.filter(spot => spot === p);

    if (winner) return finalScore(undefined, { winner, moves });

    let score = playerIsAi ? 1000 : -1000;

    const availablePositions = s.reduce((prev, curr, i) => {
      if (!curr) return prev.push(i);
      return prev;
    }, List());

    const availableNextStates = availablePositions.map(pos => state.set(pos, p));

    availableNextStates.forEach(nextState => {
      const nextPlayer = p === 'x' ? 'o' : 'x';
      const nextScore = minimaxVal(nextState, nextPlayer);

      if (!playerIsAi && nextScore > score) score = nextScore;
      if (playerIsAi && nextScore < score) score = nextScore;
    });

    return score;
  }

  return minimaxVal(state, player);
}
