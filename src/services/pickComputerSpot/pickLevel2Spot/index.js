import { List } from 'immutable';

import getMinimaxVal from './getMinimaxVal';
import getFreeSpots from '../../../utils/getFreeSpots';

/**
 * pickLevel2Spot uses a minimax algorithm to determine
 * the most optimal move to take at the current state
 * of the game.
 *
 * @param {List} state An immutable List of the brick, containing
 * both defined (occupied) and undefined (unoccupied) spots.
 * @param {String} ai A tring representing who is the ai, x or o.
 *
 * @return {Promise} A promise that will resolve to an index of
 * the most optimal move that the computer can take at that state
 */
export default function pickLevel2Spot(s, p) {
  const getAvailableSpots = ({ state, player }) => {
    const availableSpots = getFreeSpots(state);
    return Promise.resolve({ state, player, availableSpots });
  };

  const getNextStateScores = ({
    state,
    player,
    availableSpots,
  }) => {
    const availableNextStates = availableSpots.map(spot => ({
      nextState: state.set(spot, player),
      spot,
    }));

    const stateScores = availableNextStates.map(({ nextState, spot }) => (
      new Promise((resolve) => {
        getMinimaxVal(nextState, player)
          .then(stateScore => resolve(List([spot, stateScore])));
      })
    ));

    return Promise.all(stateScores);
  };

  const determineBestMove = stateScores => {
    const stateScoresList = List(stateScores);
    const sorted = stateScoresList.sort((prev, curr) => {
      const prevScore = prev.get(1);
      const currScore = curr.get(1);

      return prevScore - currScore;
    });

    return Promise.resolve(sorted.getIn([0, 0]));
  };

  return getAvailableSpots({ state: s, player: p })
    .then(getNextStateScores)
    .then(determineBestMove);
}
