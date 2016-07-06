import { expect } from 'chai';
import menu from './index.js';

describe('Reducer: menu', () => {
  describe('case NEXT_MENU_STATE', () => {
    it('should update to next state of menu', () => {
      expect(menu(undefined, { type: 'NEXT_MENU_STATE', next: 'expanded' }))
        .to.equal('expanded');
      expect(menu('expanded', { type: 'NEXT_MENU_STATE', next: 'multi' }))
        .to.equal('multi');
    });

    it('should not accept a faulty state', () => {
      expect(menu(undefined, { type: 'NEXT_MENU_STATE', next: 'foo' }))
        .to.equal('root');
      expect(menu('expanded', { type: 'NEXT_MENU_STATE', next: 'bar' }))
        .to.equal('expanded');
    });
  });

  describe('case RESET_MENU', () => {
    it('should reset the menu to root', () => {
      expect(menu('multi', { type: 'RESET_MENU' }))
        .to.equal('root');
    });
  });
});
