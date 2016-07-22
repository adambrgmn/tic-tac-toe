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
 * @return {Number}         The score for that move
 */
export default function getMinimaxVal(state, player) {
  // Determine wich player is AI
  // and wich is the opponent
  const ai = player;
  const op = ai === 'x' ? 'o' : 'x';

  const minimax = (s, p) => {
    const winner = getWinner(s);
    if (winner) {
      const aiMoves = s.filter(spot => spot === ai).size;
      return getFinalScore(winner, ai, aiMoves);
    }

    const playingAsAi = p === ai;
    let stateScore = playingAsAi ? 1000 : -1000;

    const availableSpots = getFreeSpots(s);

    availableSpots.forEach(spot => {
      const nextState = s.set(spot, p);
      const nextPlayer = p === ai ? op : ai;
      const nextStateScore = minimax(nextState, nextPlayer);

      if (!playingAsAi && nextStateScore > stateScore) stateScore = nextStateScore;
      if (playingAsAi && nextStateScore < stateScore) stateScore = nextStateScore;
    });

    return stateScore;
  };

  return Promise.resolve(minimax(state, op));
}
