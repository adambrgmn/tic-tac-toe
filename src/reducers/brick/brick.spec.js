import { List } from 'immutable';
import { expect } from 'chai';

import brick from './index.js';

describe('Reducer: brick', () => {
  describe('case "PICK_SPOT_PLAYER"', () => {
    let initialState;

    beforeEach(() => (initialState = List().setSize(8)));

    it('should occupy a spot on the brick', () => {
      const stateAfter = initialState.set(1, 'x');

      const action = { type: 'PICK_SPOT_PLAYER', player: 'x', spot: 1 };

      expect(brick(initialState, action))
        .to.equal(stateAfter);
    });

    it('should return unchanged if spot is already occupied', () => {
      const stateBefore = initialState.set(5, 'x');
      const stateAfter = initialState.set(5, 'x');
      const action = { type: 'PICK_SPOT_PLAYER', player: 'o', spot: 5 };

      expect(brick(stateBefore, action))
        .to.equal(stateAfter);
    });
  });

  describe('case "PICK_SPOT_COMPUTER"', () => {
    let initialState;

    beforeEach(() => (initialState = List().setSize(8)));

    it('should return a spot picked by the computer', () => {
      const action = { type: 'PICK_SPOT_COMPUTER', player: 'o' };

      expect(brick(undefined, action))
        .to.include('o');
    });
  });
});
