import { List } from 'immutable';
import { getWinner } from '../../../winner';

const finalScore = (winner, moves, ai) => {
  const opponent = ai === 'x' ? 'o' : 'x';

  if (winner === ai) return -10 + moves;
  if (winner === opponent) return 10 - moves;
  if (winner === 'draw') return 0;

  return undefined;
};

export default function getMinimaxVal(state, ai) {
  return (function minimaxVal(s, p) {
    const winner = getWinner(s);
    const moves = s.filter(spot => spot === p).size;

    if (winner) return finalScore(winner, moves, ai);

    const playerIsAi = p === ai;
    const nextPlayer = p === 'x' ? 'o' : 'x';
    let stateScore = p === ai ? 1000 : -1000;

    const availableSpots = s.reduce((prev, curr, i) => {
      if (!curr) return prev.push(i);
      return prev;
    }, List());

    const availableNextStates = availableSpots.map((spot) => s.set(spot, p));

    availableNextStates.forEach(nextState => {
      const nextScore = minimaxVal(nextState, nextPlayer);
      if (!playerIsAi && nextScore > stateScore) stateScore = nextScore;
      if (playerIsAi && nextScore < stateScore) stateScore = nextScore;
    });

    return stateScore;
  }(state, ai));
}
