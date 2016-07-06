import { List } from 'immutable';
import { expect } from 'chai';

import brick from './index.js';

describe('Reducer: brick', () => {
  describe('case "PICK_SPOT_PLAYER"', () => {
    let initialState;

    beforeEach(() => (initialState = List().setSize(9)));

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
    it('should return a randomly picked spot on level 0', () => {
      const action = { type: 'PICK_SPOT_COMPUTER', player: 'o', level: 0 };

      expect(brick(undefined, action))
        .to.include('o');
    });

    // it('should return a semi-randomly picked spot on level 1', () => {
    //   const action = { type: 'PICK_SPOT_COMPUTER', player: 'o', level: 1 };

    //   expect(brick(undefined, action))
    //     .to.include('o');
    // });

    it('should pick the optimal spot on level 2', () => {
      const stateBefore = List(['x']).setSize(9);
      const action = { type: 'PICK_SPOT_COMPUTER', player: 'o', level: 2 };
      const nextState = brick(stateBefore, action);

      expect(nextState).to.include('o');
      expect(nextState.get(4)).to.equal('o');
    });

    it('should pick the winning move if presented with one on level 2', () => {
      const stateBefore = List(['x', 'x', 'o', 'x', 'o']).setSize(9);
      const action = { type: 'PICK_SPOT_COMPUTER', player: 'o', level: 2 };
      const nextState = brick(stateBefore, action);

      expect(nextState.get(6)).to.equal('o');
    });
  });
});
