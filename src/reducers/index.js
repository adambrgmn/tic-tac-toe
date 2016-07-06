import { combineReducers } from 'redux';
import aiLevel from './aiLevel';
import brick from './brick';
import player from './player';
import winner from './winner';

export default combineReducers({ aiLevel, brick, player, winner });
