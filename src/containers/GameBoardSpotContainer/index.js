import { connect } from 'react-redux';

import { pickSpotPlayer, setNextPlayer } from '../../actions';
import GameBoardSpot from '../../components/GameBoard/GameBoardSpot';

const mapStateToProps = (state, ownProps) => ({
  index: ownProps.index,
  player: ownProps.player,
  activePlayer: state.player,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSpotClick: (activePlayer) => {
    dispatch(pickSpotPlayer(ownProps.index, activePlayer));
    dispatch(setNextPlayer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoardSpot);
