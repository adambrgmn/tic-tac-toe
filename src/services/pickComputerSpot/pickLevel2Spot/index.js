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
export default function pickLevel2Spot(state, ai) {
  return new Promise(resolve => {
    // Get a List of all unoccupied spots
    const availableSpots = getFreeSpots(state);

    /**
     * Iterate over all unoccupied spots and determine the
     * minimax val for all the states.
     *
     * @return {List} A two dimensional List containg value pairs,
     * of the spot (index) and the value (stateScore)
     */
    const availableNextStateScores = availableSpots.map(spot => {
      const nextState = state.set(spot, ai);
      const stateScore = getMinimaxVal(nextState, ai);

      return List([spot, stateScore]);
    });

    // Sort the List of stateScores from smalles to the larges score
    const sortedAvailableNextStateScores = availableNextStateScores.sort((prev, curr) => {
      const prevScore = prev.get(1);
      const currScore = curr.get(1);

      return prevScore - currScore;
    });

    // Resolve and resolve the index of the most optimal move
    return resolve(sortedAvailableNextStateScores.getIn([0, 0]));
  });
}
