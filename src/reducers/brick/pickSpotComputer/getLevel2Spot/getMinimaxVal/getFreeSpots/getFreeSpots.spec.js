import { expect } from 'chai';
import { List } from 'immutable';
import getFreeSpots from './index.js';

describe('Function: getFreeSpots', () => {
  it('should return an immutable list of indices of available spots', () => {
    const u = undefined;

    expect(getFreeSpots(List().setSize(9)))
      .to.equal(List([0, 1, 2, 3, 4, 5, 6, 7, 8]));
    expect(getFreeSpots(List(['x', u, 'x', u, u, u, u, u, u])))
      .to.equal(List([1, 3, 4, 5, 6, 7, 8]));
  });
});
