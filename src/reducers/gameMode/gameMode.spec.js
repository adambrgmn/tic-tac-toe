import { expect } from 'chai';

import gameMode from './index.js';

describe('Reducer: gameMode', () => {
  it('should return \'single\' as initial state', () => {
    expect(gameMode(undefined, {}))
      .to.equal('single');
  });

  describe('case "SET_GAME_MODE"', () => {
    it('should update game mode', () => {
      expect(gameMode(undefined, { type: 'SET_GAME_MODE', mode: 'single' }))
        .to.equal('single');
      expect(gameMode('single', { type: 'SET_GAME_MODE', mode: 'multi' }))
        .to.equal('multi');
    });

    it('should not accept a wrong mode value', () => {
      expect(gameMode('single', { type: 'SET_GAME_MODE', mode: 'fancy' }))
        .to.equal('single');
    });
  });
});
