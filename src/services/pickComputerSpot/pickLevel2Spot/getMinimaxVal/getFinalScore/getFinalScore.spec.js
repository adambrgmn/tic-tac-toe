import { expect } from 'chai';
import getFinalScore from './index';

describe('Function: getFinalScore', () => {
  it('should return the final score based on who\'s AI and who\'s not', () => {
    expect(getFinalScore('x', 'x', 3))
      .to.equal(-7);

    expect(getFinalScore('o', 'x', 5))
      .to.equal(5);

    expect(getFinalScore('draw', 'x', 5))
      .to.equal(0);
  });
});
