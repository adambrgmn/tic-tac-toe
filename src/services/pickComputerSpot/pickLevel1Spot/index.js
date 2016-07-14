import pickLevel0Spot from '../pickLevel0Spot';
import pickLevel2Spot from '../pickLevel2Spot';

/**
 * pickLevel1Spot uses pickLevel0Spot and pickLevel2Spot
 * to return a promise. Wich level to use is determined by
 * a random number. 60 % of the time it will use a random spot,
 * the other 40 % it will take the most optimal move.
 *
 * @param {List} brick An immutable List of spots, defined and undefined.
 * @param {String} player A string representing the current player, x or o.
 *
 * @return {Function} A function (promise)
 */
export default function pickLevel1Spot(brick, player) {
  const randomNum = Math.random() * 100;
  if (randomNum < 60) return pickLevel0Spot(brick);
  return pickLevel2Spot(brick, player);
}
