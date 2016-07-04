import { List } from 'immutable';
import { expect } from 'chai';

import brick from './index.js';

describe('Reducer: brick', () => {
  describe('case "OCCUPY_SPOT"', () => {
    let initialState;

    beforeEach(() => (initialState = List()));

    it('should occupy a spot on the brick', () => {
      const stateAfter = initialState.set(1, 'x');

      const action = { type: 'OCCUPY_SPOT', player: 'x', spot: 1 };

      expect(brick(initialState, action))
        .to.equal(stateAfter);
    });

    it('should return unchanged if spot is already occupied', () => {
      const stateBefore = initialState.set(5, 'x');
      const stateAfter = initialState.set(5, 'x');
      const action = { type: 'OCCUPY_SPOT', player: 'o', spot: 5 };

      expect(brick(stateBefore, action))
        .to.equal(stateAfter);
    });
  });
});
