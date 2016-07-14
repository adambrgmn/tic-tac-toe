import { expect } from 'chai';

import pickComputerSpot from './index';
import store from '../../store';

describe('Service: pickComputerSpot', () => {
  it.skip('should pick a random spot on aiLevel 0', function level0() {
    this.timeout(10000);
    store.dispatch({ type: 'SET_AI_LEVEL', level: 0 });

    return pickComputerSpot().then(res => {
      expect(res.index).to.be.within(0, 8);
    });
  });

  it.skip('should pick a semi random spot on aiLevel 1', function level1() {
    this.timeout(10000);
    store.dispatch({ type: 'SET_AI_LEVEL', level: 1 });

    return pickComputerSpot().then(res => {
      expect(res.index).to.be.within(0, 8);
    });
  });

  it('should pick the most optimal spot on aiLevel 2', function level2() {
    this.timeout(10000);
    store.dispatch({ type: 'SET_AI_LEVEL', level: 2 });

    return pickComputerSpot().then(res => {
      expect(res.index).to.equal(0);
    });
  });
});
