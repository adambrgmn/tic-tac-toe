/**
 * A reducer for winner.
 * It's undefined until either x or o has a
 * winning move, or the brick is full without
 * a winner, in that case it ends with draw.
 */

/**
 * getPlayerBricks is a function that reduces
 * all of a player bricks to a string, which
 * later can be used to match against winning
 * combinations.
 *
 * @param  {Array}  brick   An array of all occupied bricks
 * @param  {String} player  The player, either x or o
 * @return {String}         The bricks owned
 */
const getPlayerBricks = (brick, player) => brick.reduce((p, c, i) => {
  // If current matches player concat it to string
  if (c === player) return `${p}${i}`;
  return p;
}, '');

/**
 * constructiRegEx constructs a regular expression
 * out of possible winning combinations to match
 * against a winners moves.
 *
 * @return {RegExp} A regular expression to match winning combinations
 */
const constructRegEx = () => {
  // Combinations of winning moves
  const winningMoves = ['012', '345', '678', '036', '147', '258', '048', '246'];

  // Reduce winning moves to a RegExp-like string
  const re = winningMoves.reduce((pre, cur, i, a) => (
    `${pre}(${cur.split('').reduce((p, c) => `${p}\\d*${c}`, '')})${i === a.length - 1 ? '' : '|'}`
  ), '');

  // Return new RegExp constructed out of re-string
  return new RegExp(`(${re})`);
};

/**
 * winningMove determines if a players combination
 * of bricks is a winning combination or not
 *
 * @param  {String}  brick  A string of bricks
 * @return {Boolean}
 */
const winningMove = (brick) => constructRegEx().test(brick);

/**
 * winner determines the state of store-field winner
 * It's undefines as long as there are no winner.
 * It returns the winner if it can find one, or draw
 * if all bricks are occupied and no winner can be
 * determined.
 *
 * @param  {String} state   The previous state
 * @param  {Object} action  Object of action
 * @return {String}         Undefined, x, o or draw
 */
export default function winner(state = undefined, action) {
  let xs;
  let os;

  switch (action.type) {
    case 'CHECK_WINNER':
      // Get both players bricks
      xs = getPlayerBricks(action.brick, 'x');
      os = getPlayerBricks(action.brick, 'o');

      // Determine if anyone of them is a winner
      if (winningMove(xs)) return 'x';
      if (winningMove(os)) return 'o';

      // If all bricks are occupied return 'draw'
      if (xs.length + os.length === 9) return 'draw';

      // Otherwise return state
      return state;
    default:
      return state;
  }
}
