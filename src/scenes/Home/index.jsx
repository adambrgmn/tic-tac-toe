import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import { printMessage, hideMessage } from '../../actions';
import { screens } from '../../constants';

import Menu from './scenes/Menu';
import Game from './scenes/Game';
import Message from '../../components/Message';

export class Home extends Component {
  componentDidMount() {
    this.props.printMessageOnScreen('Let\'s play!', 'Click the button below!');
  }

  render() {
    const { screen } = this.props;
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
        <Message />
      </div>
    );
  }
}

Home.propTypes = {
  screen: PropTypes.string.isRequired,
  printMessageOnScreen: PropTypes.func,
};

const mapStateToProps = (state) => ({
  screen: state.screen,
});

const mapDispatchToProps = (dispatch) => ({
  printMessageOnScreen: (message1, message2) => {
    dispatch(printMessage(message1));
    setTimeout(() => {
      dispatch(hideMessage());
      setTimeout(() => {
        dispatch(printMessage(message2));
        setTimeout(() => dispatch(hideMessage()), 3000);
      }, 500);
    }, 2000);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
