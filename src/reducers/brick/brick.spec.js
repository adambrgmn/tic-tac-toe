import { List } from 'immutable';
import { expect } from 'chai';

import brick from './index.js';
import testAiVsAi from '../../../test/helpers/testAiVsAi';

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

    it('should not apply changes if player or spot is not defined, or faulty', () => {
      const stateBefore = initialState.set(5, 'x');

      expect(brick(stateBefore, { type: 'PICK_SPOT_PLAYER', player: 'o' }))
        .to.equal(stateBefore);
      expect(brick(stateBefore, { type: 'PICK_SPOT_PLAYER', spot: 10, player: 'o' }))
        .to.equal(stateBefore);
    });
  });

  describe('case "PICK_SPOT_COMPUTER"', () => {
    it('should return a randomly picked spot on level 0', () => {
      const action = { type: 'PICK_SPOT_COMPUTER', player: 'o', level: 0 };

      expect(brick(undefined, action))
        .to.include('o');
    });

    it('should return a semi-randomly picked spot on level 1', () => {
      const stateBefore = List(['x']).setSize(9);
      const action = { type: 'PICK_SPOT_COMPUTER', player: 'o', level: 1 };

      expect(brick(stateBefore, action))
        .to.include('o');
    });

    it('should pick the optimal spot on level 2', () => {
      const stateBefore = List(
        ['x', 'o', 'x', undefined, 'o', undefined, 'o', 'x', 'x']
      ).setSize(9);
      const action = { type: 'PICK_SPOT_COMPUTER', player: 'o', level: 2 };
      const nextState = brick(stateBefore, action);

      expect(nextState.get(5)).to.equal('o');
    });

    it('should pick the winning move if presented with one on level 2', () => {
      const stateBefore = List(['x', 'x', 'o', 'x', 'o']).setSize(9);
      const action = { type: 'PICK_SPOT_COMPUTER', player: 'o', level: 2 };
      const nextState = brick(stateBefore, action);

      expect(nextState.get(6)).to.equal('o');
    });

    it.skip('should always end in draw if two master AI\'s meet', function (done) {
      this.timeout(10000);
      const result = testAiVsAi(2, 2);
      expect(result.winner).to.equal('draw');
      done();
    });

    it('should not apply changes if player or level is not defined or faulty', () => {
      const stateBefore = List(['x', 'x', 'o', 'x', 'o']).setSize(9);

      expect(brick(stateBefore, { type: 'PICK_SPOT_COMPUTER', level: 2 }))
        .to.equal(stateBefore);
      expect(brick(stateBefore, { type: 'PICK_SPOT_COMPUTER', level: 2, player: 'y' }))
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
