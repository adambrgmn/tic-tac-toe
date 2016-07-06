import { List } from 'immutable';
import getWinner from './getWinner';
import getFinalScore from './getFinalScore';

/**
 * getMinimaxVal tests all possible outcomes
 * of the game and values. It will then
 * return the score wich is most profitable
 * for the ai.
 *
 * The AI's goal is not to aim for a win.
 * It's goal is to prevent the player from winning,
 * and it will always succeed.
 *
 * @param  {List}    state  A List of all bricks
 * @param  {String}  player The current player
 * @param  {Boolean} isAi   If the current player is AI
 * @return {Number}         The score for that move
 */
export default function getMinimaxVal(state, player, isAi) {
  // Tell whick player is AI
  let ai;
  if (isAi) ai = player;
  if (!isAi) ai = player === 'x' ? 'o' : 'x';

  // Set a root score. If the current player is AI
  // set a score higher then any outcome. It not
  // set a score lower than any outcome.
  let stateScore = isAi ? 1000 : -1000;

  // Determine if the current state has a winner
  // If so, return the score of this state
  const winner = getWinner(state);
  const aiMoves = state.filter(p => p === ai).size;
  if (winner) return getFinalScore(winner, ai, aiMoves);

  // If a winner can't be determined, go on an test all other possible outcomes
  // First get a List of indeces of possible moves
  const availableSpots = state.reduce((prev, curr, i) => {
    // If the spot is empty, undefined, push it to the new List
    if (!curr) return prev.push(i);
    return prev;
  }, List());

  // Create a List of all possible moves
  const availableNextStates = availableSpots.map((spot) => state.set(spot, player));

  // Iterate over all possible states and determine their scores
  // And if the score is in favor of the ai, apply it to stateScore
  availableNextStates.forEach((nextState) => {
    // Get the score of the next state by calling getMinimaxVal
    // recursively and with the next player not as AI
    // (or as AI the next time around).
    const nextPlayer = player === 'x' ? 'o' : 'x';
    const nextStateScore = getMinimaxVal(nextState, nextPlayer, !isAi);

    if (!isAi) {
      // If the current player is not AI it wants to return
      // a score as low as possible
      if (nextStateScore > stateScore) stateScore = nextStateScore;
    } else {
      // If the current player is AI it wants to return
      // a score as high as possible
      if (nextStateScore < stateScore) stateScore = nextStateScore;
    }
  });

  return stateScore;
}
