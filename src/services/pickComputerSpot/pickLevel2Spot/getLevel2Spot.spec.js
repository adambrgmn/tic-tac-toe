import { expect } from 'chai';
import { List } from 'immutable';
import getLevel2Spot from './index';

describe('Function: getLevel2Spot', () => {
  it('should always return the most optimal index', () => {
    const brick = List(['x', 'x', 'o', 'o', 'o', 'x', 'x', 'o']).setSize(9);
    const ai = 'o';

    return getLevel2Spot(brick, ai).then((index) => {
      expect(index).to.equal(8);
    });
  });
});
