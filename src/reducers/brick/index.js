/**
 * A reducer for brick.
 * Brick starts with an immutable List of
 * 9 undefined bricks. These bricks can then
 * be occipied by either a physical player
 * or the computer.
 */

import { List } from 'immutable';

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
  const freeSpotsSize = freeSpots.size;
  const randomNum = Math.floor(Math.random() * freeSpotsSize);

  // Return a random index of a free spot
  return freeSpots.get(randomNum);
};

/**
 * brick determines the state of store-field brick.
 * It starts with an immutable List of 9 undefined
 * spots. The actions puts a player (x or o) on
 * a spot.
 *
 * @param  {List}   state   List of spots, occupied or not
 * @param  {Object} action  Action object, must contain type
 * @return {List}           Returns new state
 */
export default function brick(state = List().setSize(8), action) {
  switch (action.type) {
    case 'PICK_SPOT_PLAYER':
      // Ignore move if the player wants to
      // occupy a already occupied spot
      if (state.get(action.spot)) return state;

      // Return state with player occupying the new spot
      return state.set(action.spot, action.player);

    case 'PICK_SPOT_COMPUTER':
      // Return state with the computer picking a random spot
      return state.set(getRandomFreeSpot(state), action.player);

    default:
      return state;
  }
}
