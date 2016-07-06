import { expect } from 'chai';

import player from './index.js';

describe('Reducer: player', () => {
  describe('case SET_NEXT_PLAYER', () => {
    it('should return the next player', () => {
      expect(player('x', { type: 'SET_NEXT_PLAYER' }))
        .to.equal('o');

      expect(player('o', { type: 'SET_NEXT_PLAYER' }))
        .to.equal('x');
    });
  });
});
