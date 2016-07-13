import { pickSpot, checkWinner, setNextPlayer } from '../../actions';
import pickComputerSpot from '../pickComputerSpot';
import getWinner from '../getWinner';

export default function onSpotClick(dispatch) {
  return (activePlayer, index) => {
    dispatch(pickSpot(activePlayer, index));
    const winner = getWinner();

    if (!winner) {
      dispatch(setNextPlayer());

      pickComputerSpot().then(res => {
        dispatch(pickSpot(res.player, res.index));
        dispatch(setNextPlayer());
      });
    } else {
      dispatch(checkWinner());
    }
  };
}
