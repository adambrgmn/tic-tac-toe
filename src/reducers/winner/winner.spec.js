import { expect } from 'chai';
import winner from './index.js';

describe('Reducer: winner', () => {
  it('should return null as initial state', () => {
    /* eslint-disable no-unused-expressions */
    expect(winner(undefined, {}))
      .to.be.null;
    /* eslint-enable no-unused-expressions */
  });

  describe('case GAME_ENDED', () => {
    it('should set the new winner as state', () => {
      expect(winner(undefined, { type: 'GAME_ENDED', winner: 'x' }))
        .to.equal('x');

      expect(winner(null, { type: 'GAME_ENDED', winner: 'draw' }))
        .to.equal('draw');
    });

    it('should just return state if winner is not provided or faulty', () => {
      expect(winner(null, { type: 'GAME_ENDED', winner: 'foo' }))
        .to.equal(null);

      expect(winner(null, { type: 'GAME_ENDED' }))
        .to.equal(null);
    });
  });

  describe('case "RESET_GAME"', () => {
    it('should reset winner to null', () => {
      const stateBefore = 'x';
      expect(winner(stateBefore, { type: 'RESET_GAME' }))
        .to.equal(null);
    });
  });
});
