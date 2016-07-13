import { List } from 'immutable';
import { expect } from 'chai';

import brick from './index.js';
import testAiVsAi from '../../../test/helpers/testAiVsAi';

describe('Reducer: brick', () => {
  it('should return a List of 9 empty objects as initial state', () => {
    expect(brick(undefined, {}))
      .to.have.size(9);
    expect(brick(undefined, {}))
      .to.equal(List().setSize(9));
  });

  describe('case "PICK_SPOT"', () => {
    let initialState;

    beforeEach(() => (initialState = List().setSize(9)));

    it('should occupy a spot on the brick', () => {
      const stateAfter = initialState.set(1, 'x');

      const action = { type: 'PICK_SPOT', player: 'x', spot: 1 };

      expect(brick(initialState, action))
        .to.equal(stateAfter);
    });

    it('should return unchanged if spot is already occupied', () => {
      const stateBefore = initialState.set(5, 'x');
      const stateAfter = initialState.set(5, 'x');
      const action = { type: 'PICK_SPOT', player: 'o', spot: 5 };

      expect(brick(stateBefore, action))
        .to.equal(stateAfter);
    });

    it('should not apply changes if player or spot is not defined, or faulty', () => {
      const stateBefore = initialState.set(5, 'x');

      expect(brick(stateBefore, { type: 'PICK_SPOT', player: 'o' }))
        .to.equal(stateBefore);
      expect(brick(stateBefore, { type: 'PICK_SPOT', spot: 10, player: 'o' }))
        .to.equal(stateBefore);
    });
  });

  describe('case RESET_GAME', () => {
    it('should reset brick to 9 empty fields', () => {
      const stateBefore = List(['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']);
      const stateAfter = List().setSize(9);
      const action = { type: 'RESET_GAME' };

      const state = brick(stateBefore, action);

      expect(state).to.have.size(9);
      expect(state).to.equal(stateAfter);
    });
  });
});
