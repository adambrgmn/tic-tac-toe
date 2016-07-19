import { expect } from 'chai';
import showScreen from './index';

describe('Reducer: showScreen', () => {
  it('should return "menu" as initial state', () => {
    expect(showScreen(undefined, {}))
      .to.equal('menu');
  });

  describe('case SET_NEXT_SCREEN', () => {
    it('should return the next screen', () => {
      let state = showScreen(undefined, { type: 'SET_NEXT_SCREEN', screen: 'game' });
      expect(state).to.equal('game');
    });
    it('should not change if the provided screen is faulty', () => {
      expect(showScreen(undefined, { type: 'SET_NEXT_SCREEN', screen: 'foo' }))
        .to.equal('menu');
    });
  });

  describe('case RESET_SCREEN', () => {
    it('should return "menu" as the default screen', () => {
      expect(showScreen('game', { type: 'RESET_SCREEN' }))
        .to.equal('menu');
    });
  });
});
