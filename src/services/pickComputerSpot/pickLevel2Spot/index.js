import { List } from 'immutable';

import getMinimaxVal from './getMinimaxVal';
import getFreeSpots from '../../../utils/getFreeSpots';

export default function pickLevel2Spot(state, ai) {
  return new Promise((resolve) => {
    const availableSpots = getFreeSpots(state);

    const availableNextStateScores = availableSpots.map((spot) => {
      const nextState = state.set(spot, ai);
      const stateScore = getMinimaxVal(nextState, ai, true);

      return List([spot, stateScore]);
    });

    const sortedAvailableNextStateScores = availableNextStateScores.sort((prev, curr) => {
      const prevScore = prev.get(1);
      const currScore = curr.get(1);

      return prevScore - currScore;
    });

    return resolve(sortedAvailableNextStateScores.getIn([0, 0]));
  });
}
