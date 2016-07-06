/**
 * Action types
 */
export const SET_AI_LEVEL = 'SET_AI_LEVEL';
export const PICK_SPOT_PLAYER = 'PICK_SPOT_PLAYER';
export const PICK_SPOT_COMPUTER = 'PICK_SPOT_COMPUTER';
export const SET_NEXT_PLAYER = 'SET_NEXT_PLAYER';
export const CHECK_WINNER = 'CHECK_WINNER';
export const SET_GAME_MODE = 'SET_GAME_MODE';
export const RESET_GAME = 'RESET_GAME';
export const NEXT_MENU_STATE = 'NEXT_MENU_STATE';
export const RESET_MENU = 'RESET_MENU';

/**
 * Other constants
 */

export const aiLevels = {
  zero: 0,
  one: 1,
  two: 2,
};

export const gameModes = {
  single: 'single',
  multi: 'mulit',
};

export const menuStates = {
  root: 'root',
  expanded: 'expanded',
  multi: 'multi',
  single: 'single',
};

/**
 * Action creators
 */

export function setAiLevel(level) {
  return { type: SET_AI_LEVEL, level };
}

export function pickSpotPlayer(spot, player) {
  return { type: PICK_SPOT_PLAYER, spot, player };
}

export function pickSpotComputer(player, level) {
  return { type: PICK_SPOT_COMPUTER, player, level };
}

export function setNextPlayer() {
  return { type: SET_NEXT_PLAYER };
}

export function checkWinner(brick) {
  return { type: CHECK_WINNER, brick };
}

export function setGameMode(mode) {
  return { type: SET_GAME_MODE, mode };
}

export function resetGame() {
  return { type: RESET_GAME };
}

export function nextMenuState(next) {
  return { type: NEXT_MENU_STATE, next };
}

export function resetMenu() {
  return { type: RESET_MENU };
}
