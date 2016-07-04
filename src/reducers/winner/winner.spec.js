import { expect } from 'chai';
import { List } from 'immutable';

import winner from './index.js';

describe('Reducer: winner', () => {
  describe('CHECK_WINNER', () => {
    it('should return a winner, if possible', () => {
      expect(winner(undefined, { type: 'CHECK_WINNER', brick: List(['x', 'x', 'x']) }))
        .to.equal('x');
    });

    it('should return "draw" if the game ends in draw', () => {
      expect(winner(undefined, {
        type: 'CHECK_WINNER',
        brick: List(['x', 'o', 'x', 'x', 'o', 'o', 'o', 'x', 'x']),
      })).to.equal('draw');
    });

    it('should return undefined if there are no winners', () => {
      expect(winner(undefined, { type: 'CHECK_WINNER', brick: List(['x', 'x', 'o']) }))
        .to.equal(undefined);
    });
  });
});
