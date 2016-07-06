import { List } from 'immutable';
import getMasterFreeSpot from './getMasterFreeSpot';

/**
 * getRandomFreeSpot picks a random spot out
 * of all free spots for the computer.
 * This will be replaced by another function
 * that determines the best move for the
 * computer, so that it will be unbeatable.
 *
 * @param  {List}   state  A List of all spots
 * @return {Number}        A random index
 */
const getRandomFreeSpot = (state) => {
  // Reduce state to only contain
  // indecies of free spots.
  const freeSpots = state.reduce((prev, curr, i) => {
    if (!curr) return prev.concat(i);
    return prev;
  }, List());

  // Get a random number from 0 to
  // the last index in the List.
  const randomNum = Math.floor(Math.random() * freeSpots.size);

  // Return a random index of a free spot
  return freeSpots.get(randomNum);
};

export default function pickSpotComputer(state, action) {
  switch (action.level) {
    case 0:
      return getRandomFreeSpot(state);
    case 2:
      return getMasterFreeSpot(state, action.player);
    default:
      return state;
  }
}
