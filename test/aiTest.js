const argv = require('optimist').argv;
import { List } from 'immutable';
import testAiVsAi from './helpers/testAiVsAi';

const levels = [...argv._];
const testRounds = argv._[2] || 100;

/* eslint-disable no-console */
const logGame = (game, played) => {
  console.log('---------');

  for (let i = 0; i < 9; i = i + 3) {
    const first = game.state.get(i) || '-';
    const second = game.state.get(i + 1) || '-';
    const third = game.state.get(i + 2) || '-';
    console.log(`[${first}][${second}][${third}]`);
  }

  console.log(`Winner: ${game.winner}`);
  console.log(`Rounds: ${game.rounds}`);
  console.log(`Games played: ${played} out of ${testRounds}`);
};

const logResult = (result) => {
  const avgRounds = result.rounds.reduce((prev, curr) => prev + curr, 0) / result.rounds.size;
  const xWins = result.winners.filter(w => w === 'x').size;
  const oWins = result.winners.filter(w => w === 'o').size;
  const draws = result.winners.filter(w => w === 'draw').size;

  console.log('---------');
  console.log('---------');
  console.log(`Average rounds: ${avgRounds.toFixed(2)}`);
  console.log(`x wins: ${xWins} (${Math.round((xWins / testRounds) * 100)}%)`);
  console.log(`o wins: ${oWins} (${Math.round((oWins / testRounds) * 100)}%)`);
  console.log(`draws: ${draws} (${Math.round((draws / testRounds) * 100)}%)`);
  console.log('---------');
  console.log('Played with:');
  console.log(`  x: level ${levels[0] || 0}`);
  console.log(`  o: level ${levels[1] || 0}`);
};

const runTest = (logProgress = true) => {
  let rounds = List();
  let winners = List();

  for (let i = 1; i <= testRounds; i++) {
    const game = testAiVsAi(...levels);
    rounds = rounds.push(game.rounds);
    winners = winners.push(game.winner);

    if (logProgress) logGame(game, i);
  }

  return { rounds, winners };
};

console.log('The tests will now begin, x is always first');
const result = runTest();
logResult(result);
