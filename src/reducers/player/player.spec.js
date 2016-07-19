import { expect } from 'chai';

import player from './index.js';

describe('Reducer: player', () => {
  it('should return \'x\' as initial state', () => {
    expect(player(undefined, {}))
      .to.equal('x');
  });

  describe('case SET_NEXT_PLAYER', () => {
    it('should return the next player', () => {
      expect(player('x', { type: 'SET_NEXT_PLAYER' }))
        .to.equal('o');

      expect(player('o', { type: 'SET_NEXT_PLAYER' }))
        .to.equal('x');
    });
  });

  describe('case RESET_GAME', () => {
    it('should reset player to "x"', () => {
      expect(player('x', { type: 'RESET_GAME' }))
        .to.equal('x');
      expect(player('o', { type: 'RESET_GAME' }))
        .to.equal('x');
    });
  });
});
