import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import { screens } from '../../constants';

import Menu from './scenes/Menu';
import Game from './scenes/Game';

export function Home({ screen }) {
  const displayMenu = screen === screens.menu ? <Menu /> : null;
  const displayGame = screen === screens.game ? <Game /> : null;
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="screen-transition"
        transitionEnterTimeout={3000}
        transitionLeaveTimeout={3000}
      >
        {displayMenu}
        {displayGame}
      </ReactCSSTransitionGroup>
    </div>
  );
}

Home.propTypes = {
  screen: PropTypes.string.isRequired,
};

const mapStateToProps = ({ screen }) => ({
  screen,
});

export default connect(mapStateToProps)(Home);
