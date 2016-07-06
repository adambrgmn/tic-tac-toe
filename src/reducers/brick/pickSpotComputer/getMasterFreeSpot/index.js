import { List } from 'immutable';
import getMinimaxVal from './getMinimaxVal';

export default function getMasterFreeSpot(state, ai) {
  const availableSpots = state.reduce((prev, curr, i) => {
    if (!curr) return prev.push(i);
    return prev;
  }, List());

  const availableNextStateScores = availableSpots.map(spot => {
    const nextState = state.set(spot, ai);
    const stateScore = getMinimaxVal(nextState, ai, true);

    return List([spot, stateScore]);
  });

  const sortedAvailableNextStateScores = availableNextStateScores.sort((prev, curr) => {
    const prevScore = prev.get(1);
    const currScore = curr.get(1);
    return prevScore - currScore;
  });

  return sortedAvailableNextStateScores.getIn([0, 0]);
}
