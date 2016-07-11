import { expect } from 'chai';
import settings from './index';

/* eslint-disable no-unused-expressions */
describe('Reducer: settings', () => {
  it('should return false as initial state', () => {
    expect(settings(undefined, {}))
      .to.be.false;
  });

  describe('case SHOW_SETTINGS', () => {
    it('should return true when dispatching SHOW_SETTINGS', () => {
      expect(settings(undefined, { type: 'SHOW_SETTINGS' }))
        .to.be.true;
      expect(settings(false, { type: 'SHOW_SETTINGS' }))
        .to.be.true;
    });
  });

  describe('case HIDE_SETTINGS', () => {
    it('should return false when dispatching HIDE_SETTINGS', () => {
      expect(settings(undefined, { type: 'HIDE_SETTINGS' }))
        .to.be.false;
      expect(settings(true, { type: 'HIDE_SETTINGS' }))
        .to.be.false;
    });
  });
});
