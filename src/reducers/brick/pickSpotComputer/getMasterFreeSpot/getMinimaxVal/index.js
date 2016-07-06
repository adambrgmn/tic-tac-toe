import { List } from 'immutable';
import getWinner from './getWinner';
import getFinalScore from './getFinalScore';

export default function getMinimaxVal(state, player, isAi) {
  let ai;
  if (isAi) ai = player;
  if (!isAi) ai = player === 'x' ? 'o' : 'x';
  let stateScore = isAi ? 1000 : -1000;

  const winner = getWinner(state);
  const aiMoves = state.filter(p => p === ai).size;

  if (winner) return getFinalScore(winner, ai, aiMoves);

  const availableSpots = state.reduce((prev, curr, i) => {
    if (!curr) return prev.push(i);
    return prev;
  }, List());

  const availableNextStates = availableSpots.map((spot) => state.set(spot, player));

  availableNextStates.forEach((nextState) => {
    const nextPlayer = player === 'x' ? 'o' : 'x';
    const nextStateScore = getMinimaxVal(nextState, nextPlayer, !isAi);

    if (!isAi) {
      if (nextStateScore > stateScore) stateScore = nextStateScore;
    } else {
      if (nextStateScore < stateScore) stateScore = nextStateScore;
    }
  });

  return stateScore;
}
