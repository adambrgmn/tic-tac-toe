import getLevel0Spot from './getLevel0Spot';
import getLevel2Spot from './getLevel2Spot';

import { aiLevels } from '../../../constants';

export default function pickSpotComputer(state, action) {
  const randomNum = Math.random() * 100;

  switch (action.level) {
    case aiLevels.zero:
      return getLevel0Spot(state);
    case aiLevels.one:
      if (randomNum > 40) return getLevel0Spot(state);
      return getLevel2Spot(state, action.player);
    case aiLevels.two:
      return getLevel2Spot(state, action.player);
    default:
      return state;
  }
}
