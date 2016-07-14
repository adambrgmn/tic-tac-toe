import { pickSpot, checkWinner, setNextPlayer } from '../../actions';
import pickComputerSpot from '../pickComputerSpot';
import getWinner from '../getWinner';

/**
 * onSpotClick return a function to be called
 * on when the user clicks on a spot on the brick.
 * The returned function will the play a round,
 * but if a winner can be termined it will proclaimed
 *
 * @param {Function} dispatch A Redux Store dispatcher function
 *
 * @return {Function} A function that can be bound to clicking on
 * a spot on the brick
 */
export default function onSpotClick(dispatch) {
  return (activePlayer, index) => {
    // Dispatch an action picking a spot for the player
    dispatch(pickSpot(activePlayer, index));

    // Check if the current brick resulted in a winner
    const winner = getWinner();

    if (!winner) {
      // If no winner can be determined, dispatch
      // an action to set next player
      dispatch(setNextPlayer());

      // Pick a spot for the computer
      pickComputerSpot().then(res => {
        // Dispatch an action to pick
        // a spot for the computer
        dispatch(pickSpot(...res));

        // Set the next player
        dispatch(setNextPlayer());
      });
    }

    // Check for a winner again
    dispatch(checkWinner());
  };
}
