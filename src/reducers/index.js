import { combineReducers } from 'redux';

import aiLevel from './aiLevel';
import brick from './brick';
import gameMode from './gameMode';
import player from './player';
import winner from './winner';
import menu from './menu';

export default combineReducers({
  aiLevel,
  brick,
  gameMode,
  player,
  winner,
  menu,
});
