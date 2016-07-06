export default function getFinalScore(winner, ai, aiMoves) {
  const opponent = ai === 'x' ? 'o' : 'x';

  if (winner === ai) return -10 + aiMoves;
  if (winner === opponent) return 10 - aiMoves;
  if (winner === 'draw') return 0;

  return undefined;
}
