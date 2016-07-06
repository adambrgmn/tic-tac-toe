import { expect } from 'chai';

import reducer from './index.js';

describe('Reducer: ROOT reducer', () => {
  const initialState = reducer(undefined, { type: '' });
  let state = initialState;

  it('should return a initial state', () => {
    /* eslint-disable no-unused-expressions */
    expect(state).to.not.be.empty;
    /* eslint-enable no-unused-expressions */
  });

  it('should accept an action and update accordingly', () => {
    state = reducer(state, { type: 'SET_NEXT_PLAYER' });
    expect(state.player).to.equal('o');
  });

  it('should reset to initial state on case RESET_GAME', () => {
    state = reducer(state, { type: 'RESET_GAME' });
    expect(state).to.deep.equal(initialState);
  });
});
