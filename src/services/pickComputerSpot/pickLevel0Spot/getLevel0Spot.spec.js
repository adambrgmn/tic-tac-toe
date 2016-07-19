import { expect } from 'chai';
import { List } from 'immutable';
import getLevel0Spot from './index';

describe('Function: getLevel0Spot', () => {
  it('should return a random index of available free spots', () => {
    const state = List(['x']).setSize(9);
    let spot;

    return getLevel0Spot(state).then((index) => {
      spot = index;
      expect(spot).to.be.within(0, 8);
    });
  });
});
