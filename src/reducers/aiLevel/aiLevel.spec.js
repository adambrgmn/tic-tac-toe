import { expect } from 'chai';

import aiLevel from './index.js';

describe('Reducer: aiLevel', () => {
  describe('case SET_AI_LEVEL', () => {
    it('should set ai level', () => {
      expect(aiLevel(0, { type: 'SET_AI_LEVEL', level: 1 }))
        .to.equal(1);

      expect(aiLevel(1, { type: 'SET_AI_LEVEL', level: 2 }))
        .to.equal(2);
    });

    it('should not set level if it\'s higher than 2 or lower than 0', () => {
      expect(aiLevel(1, { type: 'SET_AI_LEVEL', level: 3 }))
        .to.equal(1);

      expect(aiLevel(1, { type: 'SET_AI_LEVEL', level: -1 }))
        .to.equal(1);
    });
  });
});
