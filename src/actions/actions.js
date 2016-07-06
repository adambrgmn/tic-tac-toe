/**
 * Action types
 */
export const SET_AI_LEVEL = 'SET_AI_LEVEL';
export const PICK_SPOT_PLAYER = 'PICK_SPOT_PLAYER';
export const PICK_SPOT_COMPUTER = 'PICK_SPOT_COMPUTER';
export const SET_NEXT_PLAYER = 'SET_NEXT_PLAYER';
export const CHECK_WINNER = 'CHECK_WINNER';

/**
 * Other constants
 */

export const aiLevels = {
  zero: 0,
  one: 1,
  two: 2,
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

export function chechWinner(brick) {
  return { type: CHECK_WINNER, brick };
}
