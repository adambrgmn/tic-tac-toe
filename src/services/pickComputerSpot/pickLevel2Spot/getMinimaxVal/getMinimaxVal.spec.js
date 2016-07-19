import { expect } from 'chai';
import { List } from 'immutable';

import getMinimaxVal from './index';

describe('Function: getMinimaxVal', () => {
  it('should return a number between -10 and 10', () => {
    expect(getMinimaxVal(List(['x', 'x', 'o', 'o', 'o', 'x', 'x', 'o']).setSize(9), 'x'))
      .to.be.within(-10, 10);
  });
});
