import { expect } from 'chai';
import { List } from 'immutable';
import getWinner from './index';

describe('Function: getWinner', () => {
  it('should return a winner if one can be found', () => {
    const brick = List(['x', 'x', 'x', 'o']).setSize(9);
    expect(getWinner(brick)).to.equal('x');
  });

  it('should return draw if all spots are taken and no winner is determined', () => {
    const brick = List(['x', 'x', 'o', 'o', 'o', 'x', 'x', 'o', 'x']);
    expect(getWinner(brick)).to.equal('draw');
  });

  it('should return null if the game is not done and no winner can be determined', () => {
    const brick = List(['x']).setSize(9);
    /* eslint-disable no-unused-expressions */
    expect(getWinner(brick)).to.be.null;
    /* eslint-enable no-unused-expressions */
  });
});
