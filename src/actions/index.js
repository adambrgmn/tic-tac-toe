import * as types from '../constants/actionTypes';

/**
 * Action creators
 */
export const checkWinner = () => ({
  type: types.CHECK_WINNER,
});

export const gameEnded = (winner) => ({
  type: types.GAME_ENDED,
  winner,
});

export const hideMessage = () => ({
  type: types.HIDE_MESSAGE,
});

export const hideSettings = () => ({
  type: types.HIDE_SETTINGS,
});

export const pickSpot = (player, spot) => ({
  type: types.PICK_SPOT,
  player,
  spot,
});

export const printMessage = (message) => ({
  type: types.PRINT_NEW_MESSAGE,
  message,
});

export const resetGame = () => ({
  type: types.RESET_GAME,
});

export const resetMenu = () => ({
  type: types.RESET_MENU,
});

export const resetScreen = () => ({
  type: types.RESET_SCREEN,
});

export const setAiLevel = (level) => ({
  type: types.SET_AI_LEVEL,
  level,
});

export const setGameMode = (mode) => ({
  type: types.SET_GAME_MODE,
  mode,
});

export const setNextMenuState = (next) => ({
  type: types.SET_NEXT_MENU_STATE,
  next,
});

export const setNextPlayer = () => ({
  type: types.SET_NEXT_PLAYER,
});

export const setNextScreen = (screen) => ({
  type: types.SET_NEXT_SCREEN,
  screen,
});

export const showSettings = () => ({
  type: types.SHOW_SETTINGS,
});
