import { expect } from 'chai';
import menu from './index.js';

describe('Reducer: menu', () => {
  it('should return "root" as initial state', () => {
    expect(menu(undefined, {}))
      .to.equal(0);
  });

  describe('case SET_NEXT_MENU_STATE', () => {
    it('should update to next state of menu', () => {
      expect(menu(undefined, { type: 'SET_NEXT_MENU_STATE', next: 1 }))
        .to.equal(1);
      expect(menu(1, { type: 'SET_NEXT_MENU_STATE', next: 2 }))
        .to.equal(2);
    });

    it('should not accept a faulty state', () => {
      expect(menu(undefined, { type: 'SET_NEXT_MENU_STATE', next: 'foo' }))
        .to.equal(0);
      expect(menu(1, { type: 'SET_NEXT_MENU_STATE', next: 'bar' }))
        .to.equal(1);
    });
  });

  describe('case RESET_MENU', () => {
    it('should reset the menu to "root"', () => {
      expect(menu(1, { type: 'RESET_MENU' }))
        .to.equal(0);
    });
  });
});
