/**
 * getFinalScore returns the score from
 * the winner of the current state.
 *
 * @param  {String} winner  The winner, x, o, draw or undefined
 * @param  {String} ai      The AI, x or o
 * @param  {Number} aiMoves Number of moves by ai
 * @return {Number}         The final score
 */
export default function getFinalScore(winner, ai, aiMoves) {
  const opponent = ai === 'x' ? 'o' : 'x';

  if (winner === ai) return -10 + aiMoves;
  if (winner === opponent) return 10 - aiMoves;
  if (winner === 'draw') return 0;

  return undefined;
}
