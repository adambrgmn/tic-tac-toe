import { expect } from 'chai';

import reducer from './index.js';

describe('Reducer: ROOT reducer', () => {
  it('should return a initial state', () => {
    const initialState = reducer(undefined, { type: '' });
    expect(initialState).to.not.be.empty;
  });

  it('should accept an action and update accordingly', () => {
    const initialState = reducer(undefined, { type: 'SET_NEXT_PLAYER' });
    expect(initialState.player).to.equal('o');
  });
});
