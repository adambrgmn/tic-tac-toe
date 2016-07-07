import { List } from 'immutable';
import getMinimaxVal from './getMinimaxVal';
import getFreeSpots from './getMinimaxVal/getFreeSpots';

/**
 * getLevel2Spot returns the optimal
 * spot for an ai in tic-tac-toe. It
 * uses a minimax algorithm to
 * determine wich move is most optimal.
 *
 * @param  {List}   state  A list of all bricks
 * @param  {string} ai     The ai-player, x or o
 * @return {Number}        The index of most optimal brick
 */
export default function getLevel2Spot(state, ai) {
  // Get all free spots on the brick
  const availableSpots = getFreeSpots(state);

  // Determine teh score of all the possible next moves
  const availableNextStateScores = availableSpots.map(spot => {
    const nextState = state.set(spot, ai);
    const stateScore = getMinimaxVal(nextState, ai, true);

    // Return a two-dimensional List
    return List([spot, stateScore]);
  });

  // Sort all scores from lowest to highest
  const sortedAvailableNextStateScores = availableNextStateScores.sort((prev, curr) => {
    const prevScore = prev.get(1);
    const currScore = curr.get(1);
    return prevScore - currScore;
  });

  // Return the index of the move with the least score
  return sortedAvailableNextStateScores.getIn([0, 0]);
}
