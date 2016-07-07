import * as types from '../constants/actionTypes';

/**
 * Action creators
 */
/* eslint-disable max-len */
export const setAiLevel = (level) => ({ type: types.SET_AI_LEVEL, level });
export const setGameMode = (mode) => ({ type: types.SET_GAME_MODE, mode });
export const setNextMenuState = (next) => ({ type: types.SET_NEXT_MENU_STATE, next });
export const setNextPlayer = () => ({ type: types.SET_NEXT_PLAYER });
export const setNextScreen = (screen) => ({ type: types.SET_NEXT_SCREEN, screen });
export const resetGame = () => ({ type: types.RESET_GAME });
export const resetMenu = () => ({ type: types.RESET_MENU });
export const resetScreen = () => ({ type: types.RESET_SCREEN });
export const pickSpotComputer = (player, level) => ({ type: types.PICK_SPOT_COMPUTER, player, level });
export const pickSpotPlayer = (spot, player) => ({ type: types.PICK_SPOT_PLAYER, spot, player });
export const checkWinner = (brick) => ({ type: types.CHECK_WINNER, brick });
