import { expect } from 'chai';
import { List } from 'immutable';

import winner from './index.js';

describe('Reducer: winner', () => {
  describe('case "CHECK_WINNER"', () => {
    it('should return a winner, if possible', () => {
      expect(winner(null, { type: 'CHECK_WINNER', brick: List(['x', 'x', 'x']) }))
        .to.equal('x');

      expect(winner(null, {
        type: 'CHECK_WINNER',
        brick: List(['x', 'o', 'o', 'x', 'o', 'x', 'o', 'x', 'x']),
      })).to.equal('o');

      expect(winner(null, {
        type: 'CHECK_WINNER',
        brick: List(['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']),
      })).to.equal('x');
    });

    it('should return "draw" if the game ends in draw', () => {
      expect(winner(null, {
        type: 'CHECK_WINNER',
        brick: List(['x', 'x', 'o', 'o', 'o', 'x', 'x', 'o', 'x']),
      })).to.equal('draw');
    });

    it('should return null if there are no winners', () => {
      expect(winner(null, { type: 'CHECK_WINNER', brick: List(['x', 'x', 'o']) }))
        .to.equal(null);
    });

    it('should not apply changes if brick is undefined or faulty', () => {
      expect(winner(null, { type: 'CHECK_WINNER' }))
        .to.equal(null);
      expect(winner(null, { type: 'CHECK_WINNER', brick: ['x', 'o'] }))
        .to.equal(null);
    });
  });
});
