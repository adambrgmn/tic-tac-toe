import { combineReducers } from 'redux';

import aiLevel from './aiLevel';
import brick from './brick';
import gameMode from './gameMode';
import menu from './menu';
import message from './message';
import player from './player';
import settings from './settings';
import screen from './screen';
import winner from './winner';

export default combineReducers({
  aiLevel,
  brick,
  gameMode,
  menu,
  message,
  player,
  settings,
  screen,
  winner,
});
