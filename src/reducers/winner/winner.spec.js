import { expect } from 'chai';
import { List } from 'immutable';

import winner from './index.js';

describe('Reducer: winner', () => {
  describe('case "CHECK_WINNER"', () => {
    it('should return a winner, if possible', () => {
      expect(winner(undefined, { type: 'CHECK_WINNER', brick: List(['x', 'x', 'x']) }))
        .to.equal('x');
      expect(winner(undefined, {
        type: 'CHECK_WINNER',
        brick: List(['x', 'o', 'o', 'x', 'o', 'x', 'o', 'x', 'x']),
      })).to.equal('o');
    });

    it('should return "draw" if the game ends in draw', () => {
      expect(winner(undefined, {
        type: 'CHECK_WINNER',
        brick: List(['x', 'x', 'o', 'o', 'o', 'x', 'x', 'o', 'x']),
      })).to.equal('draw');
    });

    it('should return undefined if there are no winners', () => {
      expect(winner(undefined, { type: 'CHECK_WINNER', brick: List(['x', 'x', 'o']) }))
        .to.equal(undefined);
    });
  });
});
