import getLevel0Spot from './getLevel0Spot';
import getLevel2Spot from './getLevel2Spot';

import { aiLevels } from '../../../constants';

export default function pickSpotComputer(state, action) {
  switch (action.level) {
    case aiLevels.zero:
      return getLevel0Spot(state);
    case aiLevels.one:
      const randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      if (randomNum < 5) return getLevel0Spot(state);
      return getLevel2Spot(state, action.player);
    case aiLevels.two:
      return getLevel2Spot(state, action.player);
    default:
      return state;
  }
}
