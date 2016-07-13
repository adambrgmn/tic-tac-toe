// THIS WILL NO LONGER WORK SINCE
// AI LOGIC BEEN MOVED, I WILL SOON
// UPDATE IT
import { List } from 'immutable';
import brick from '../../src/reducers/brick';
import winner from '../../src/reducers/winner';
import { pickSpotComputer, checkWinner } from '../../src/actions';

const testAiVsAi = (xLevel = 0, oLevel = 0) => {
  let state = List().setSize(9);
  let player = 'x';
  let rounds = 0;
  let gameWinner = winner(undefined, checkWinner(state));
  const level = { x: xLevel, o: oLevel };

  while (gameWinner === null) {
    state = brick(state, pickSpotComputer(player, level[player]));
    player = player === 'x' ? 'o' : 'x';
    gameWinner = winner(undefined, checkWinner(state));
    rounds++;
  }

  return { rounds, state, winner: gameWinner };
};

export default testAiVsAi;
