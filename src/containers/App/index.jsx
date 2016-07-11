import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Menu from '../Menu';
import Game from '../Game';
import Settings from '../Settings';

import { screens } from '../../constants';

export function App({ showScreen, showSettings }) {
  const screen = showScreen === screens.menu ? <Menu /> : <Game />;
  const settings = showSettings ? <Settings /> : null;

  return (
    <div>
      {screen}
      {settings}
    </div>
  );
}

App.propTypes = {
  showScreen: PropTypes.string.isRequired,
  showSettings: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  showScreen: state.screen,
  showSettings: state.settings,
});

export default connect(mapStateToProps)(App);
