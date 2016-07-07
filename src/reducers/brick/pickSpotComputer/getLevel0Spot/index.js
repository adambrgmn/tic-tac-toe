import getFreeSpots from '../getLevel2Spot/getMinimaxVal/getFreeSpots';

/**
 * getLevel0Spot picks a random spot out
 * of all free spots for the computer.
 * This will be replaced by another function
 * that determines the best move for the
 * computer, so that it will be unbeatable.
 *
 * @param  {List}   state  A List of all spots
 * @return {Number}        A random index
 */
export default function getLevel0Spot(state) {
  // Reduce state to only contain
  // indecies of free spots.
  const freeSpots = getFreeSpots(state);

  // Get a random number from 0 to
  // the last index in the List.
  const randomNum = Math.floor(Math.random() * freeSpots.size);

  // Return a random index of a free spot
  return freeSpots.get(randomNum);
}
