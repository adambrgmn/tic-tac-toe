import { pickSpot, gameEnded } from '../../actions';
import pickComputerSpot from '../pickComputerSpot';
import getWinner from '../getWinner';

/**
 * playRound return a function to be called
 * on when the user clicks on a spot on the brick.
 * The returned function will the play a round,
 * but if a winner can be termined it will proclaimed
 *
 * @param {Function} dispatch A Redux Store dispatcher function
 *
 * @return {Function} A function that can be bound to clicking on
 * a spot on the brick
 */
export default function playRound(dispatch) {
  return (activePlayer, index) => {
    // Dispatch an action, picking a spot for the player
    dispatch(pickSpot(activePlayer, index));

    // Check if the current brick resulted in a winner
    let winner = getWinner();

    if (winner) {
      // If a winner can be determined, dispatch an action
      // to set the winner, x, o or draw
      dispatch(gameEnded(winner));
    } else {
      // If not, let the computer take a move
      pickComputerSpot().then(res => {
        dispatch(pickSpot(res.player, res.index));

        // Once again check if a winning move has been made
        winner = getWinner();
        if (winner) dispatch(gameEnded(winner));
      });
    }
  };
}
