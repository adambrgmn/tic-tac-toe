import store from '../../store';

import pickLevel0Spot from './pickLevel0Spot';
import pickLevel1Spot from './pickLevel1Spot';
import pickLevel2Spot from './pickLevel2Spot';

export default function pickComputerSpot() {
  const { aiLevel, player, brick } = store.getState();

  return new Promise((resolve, reject) => {
    switch (aiLevel) {
      case 0:
        return pickLevel0Spot(brick)
          .then(index => resolve({ player, index }))
          .catch(err => reject(err));
      case 1:
        return pickLevel1Spot(brick, player)
          .then(index => resolve({ player, index }))
          .catch(err => reject(err));
      case 2:
        return pickLevel2Spot(brick, player)
          .then(index => resolve({ player, index }))
          .catch(err => reject(err));

      default:
        return reject('Error: Could not pick computer spot');
    }
  });
}
