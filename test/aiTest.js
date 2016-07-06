import { List } from 'immutable';
import brick from '../src/reducers/brick';
import winner from '../src/reducers/winner';
import { pickSpotComputer, pickSpotPlayer, checkWinner } from '../src/actions/actions';

/* eslint-disable no-console */
const logGame = (state) => {
  console.log(`[${state.get(0) || '-'}][${state.get(1) || '-'}][${state.get(2) || '-'}]`);
  console.log(`[${state.get(3) || '-'}][${state.get(4) || '-'}][${state.get(5) || '-'}]`);
  console.log(`[${state.get(6) || '-'}][${state.get(7) || '-'}][${state.get(8) || '-'}]`);
  console.log('---------');
};

const testAiVsAi = () => {
  let state = List().setSize(9);
  let player = 'x';
  let game = winner(undefined, checkWinner(state));
  const level = { x: 2, o: 2 };

  while (game === null) {
    state = brick(state, pickSpotComputer(player, level[player]));
    player = player === 'x' ? 'o' : 'x';
    game = winner(undefined, checkWinner(state));
    logGame(state);
  }
  // state = brick(state, pickSpotPlayer(1, 'x'));
  // logGame(state);
  // state = brick(state, pickSpotComputer('o', 2));
  // logGame(state);
  // state = brick(state, pickSpotPlayer(7, 'x'));
  // logGame(state);
  // state = brick(state, pickSpotComputer('o', 2));
  // logGame(state);

  console.log(`Winner: ${winner(undefined, checkWinner(state))}`);
  console.log(`Played rounds: ${state.filter(s => s).size}`);
};

console.log('The game begins!');
testAiVsAi();
