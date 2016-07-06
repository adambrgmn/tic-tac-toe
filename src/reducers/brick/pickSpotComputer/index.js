import getLevel0Spot from './getLevel0Spot';
import getLevel2Spot from './getLevel2Spot';

export default function pickSpotComputer(state, action) {
  switch (action.level) {
    case 0:
      return getLevel0Spot(state);
    case 1:
      const randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      if (randomNum < 5) return getLevel0Spot(state);
      return getLevel2Spot(state, action.player);
    case 2:
      return getLevel2Spot(state, action.player);
    default:
      return state;
  }
}
