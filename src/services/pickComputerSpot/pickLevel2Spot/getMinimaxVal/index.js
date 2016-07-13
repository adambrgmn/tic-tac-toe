import getWinner from '../../../getWinner';
import getFinalScore from './getFinalScore';
import getFreeSpots from '../../../../utils/getFreeSpots';

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
export default function getMinimaxVal(state, player) {
  // Determine wich player is AI
  // and wich is the opponent
  const ai = player;
  const op = ai === 'x' ? 'o' : 'x';

  // Return a named IIFE that also gets
  // called recursively inside itself.
  return (function minimax(s, p) {
    // Determine if the current state is an
    // ending state and if there is a winner
    const winner = getWinner(s);
    if (winner) {
      const aiMoves = s.filter(spot => spot === ai).size;
      return getFinalScore(winner, ai, aiMoves);
    }

    // Check if current player is ai
    const playingAsAi = p === ai;

    // Set a base score to test against later
    // relative to if the player is ai or not.
    let stateScore = playingAsAi ? 1000 : -1000;

    // Get all available free spots to test against later
    const availableSpots = getFreeSpots(s);

    // Determine the minimax score of each available spot
    availableSpots.forEach(spot => {
      // Get next state with available spots applied
      const nextState = s.set(spot, p);

      // Set the next player
      const nextPlayer = p === ai ? op : ai;

      // Call minimax recursively to get
      // the score of every possible state
      const nextStateScore = minimax(nextState, nextPlayer);

      // The opponent wants to maximize
      if (!playingAsAi && nextStateScore > stateScore) stateScore = nextStateScore;
      // The AI wants to minimize
      if (playingAsAi && nextStateScore < stateScore) stateScore = nextStateScore;
    });

    // Finally return the score of the current state
    return stateScore;
  }(state, op)); // It's important to call minimax with the opponent the first time
}
