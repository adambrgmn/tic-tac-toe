import { expect } from 'chai';

import finalScore from './index.js';

describe('Reducer: finalScore', () => {
  describe('case GET_FINAL_SCORE', () => {
    it('should return the score for the human player', () => {
      expect(finalScore(undefined, { type: 'GET_FINAL_SCORE', moves: 3, winner: 'x' }))
        .to.equal(7);
      expect(finalScore(undefined, { type: 'GET_FINAL_SCORE', moves: 3, winner: 'o' }))
        .to.equal(-7);
      expect(finalScore(undefined, { type: 'GET_FINAL_SCORE', moves: 3, winner: 'draw' }))
        .to.equal(0);
    });
  });
});
