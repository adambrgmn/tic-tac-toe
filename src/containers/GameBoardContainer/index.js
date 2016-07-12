import { connect } from 'react-redux';

import GameBoard from '../../components/GameBoard';

const mapStateToProps = (state) => ({
  brick: state.brick,
});

export default connect(mapStateToProps)(GameBoard);
