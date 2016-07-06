import { List } from 'immutable';
import getMinimaxVal from './getMinimaxVal';

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


const getMasterFreeSpot = (state, player) => {
  const availableSpots = state.reduce((prev, curr, i) => {
    if (!curr) return prev.push(i);
    return prev;
  }, List());

  const availableActions = availableSpots.map(spot => {
    const nextState = state.set(spot, player);
    const minimaxVal = getMinimaxVal(nextState, player);

    return List([spot, minimaxVal]);
  });

  const sortedActions = availableActions.sort((prev, curr) => {
    if (prev.get(1) < curr.get(1)) return -1;
    if (prev.get(1) > curr.get(1)) return 1;
    return 0;
  });

  return sortedActions.getIn([0, 0]);
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
