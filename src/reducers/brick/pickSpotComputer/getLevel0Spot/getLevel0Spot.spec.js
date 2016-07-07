import { expect } from 'chai';
import { List } from 'immutable';
import getLevel0Spot from './index';

describe('Function: getLevel0Spot', () => {
  it('should return a random index of available free spots', () => {
    const state = List(['x']).setSize(9);
    expect(getLevel0Spot(state))
      .to.be.within(1, 8);
  });
});
