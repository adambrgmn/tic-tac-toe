import getFreeSpots from '../../../utils/getFreeSpots';

/**
 * getLevel0Spot picks a random spot out
 * of all free spots for the computer.
 *
 * @param  {List} brick A List of all spots on the brick,
 * even those that are undefined
 *
 * @return {Promise} A Promise with a random spot out of
 * those still undefined as its resolve value
 */
export default function pickLevel0Spot(brick) {
  return new Promise((resolve) => {
    // Reduce state to only contain
    // indecies of free spots.
    const freeSpots = getFreeSpots(brick);

    // Get a random number from 0 to
    // the last index in the List.
    const randomNum = Math.floor(Math.random() * freeSpots.size);

    // Get a random index of a free spot
    const randomSpot = freeSpots.get(randomNum);
    return resolve(randomSpot);
  });
}
