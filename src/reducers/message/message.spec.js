import { expect } from 'chai';
import message from './index';

describe('Reducer: message', () => {
  it('should have show = false and message = null as initial state', () => {
    expect(message(undefined, { type: '' }))
      .to.deep.equal({ show: false, message: null });
  });

  describe('case PRINT_NEW_MESSAGE', () => {
    it('should print out a new message', () => {
      const stateBefore = {
        show: false,
        message: 'Some random message',
      };
      const stateAfter = {
        show: true,
        message: 'A real message',
      };
      const action = { type: 'PRINT_NEW_MESSAGE', message: 'A real message' };

      expect(message(stateBefore, action))
        .to.deep.equal(stateAfter);
    });

    it('should do nothing if no message is provided', () => {
      const stateBefore = { show: false, message: 'A message' };
      const action = { type: 'PRINT_NEW_MESSAGE', message: '' };

      expect(message(stateBefore, action))
        .to.deep.equal(stateBefore);
    });
  });

  describe('case HIDE_MESSAGE', () => {
    it('should toggle show to false', () => {
      const stateBefore = { show: true, message: 'A message' };
      const stateAfter = { show: false, message: 'A message' };
      const action = { type: 'HIDE_MESSAGE' };

      expect(message(stateBefore, action))
        .to.deep.equal(stateAfter);
    });
  });
});
