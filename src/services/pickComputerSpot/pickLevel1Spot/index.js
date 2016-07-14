import pickLevel0Spot from '../pickLevel0Spot';
import pickLevel2Spot from '../pickLevel2Spot';

export default function pickLevel1Spot(brick, player) {
  const randomNum = Math.random() * 100;
  if (randomNum < 60) return pickLevel0Spot(brick);
  return pickLevel2Spot(brick, player);
}
