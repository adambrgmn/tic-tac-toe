import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  hideSettings,
  resetMenu,
  resetGame,
  resetScreen,
} from '../../../../actions';

import SettingsButton from '../SettingsButton';

export function SettingsWidgetResets({ show, goToMenuClick, resetGameClick }) {
  if (show) {
    return (
      <div className="settings-section settings-section-resets">
        <SettingsButton
          type="text"
          text="Go to menu"
          onClick={goToMenuClick}
        />
        <SettingsButton
          type="text"
          text="Reset game"
          onClick={resetGameClick}
        />
      </div>
    );
  }

  return null;
}

SettingsWidgetResets.propTypes = {
  show: PropTypes.bool,
  goToMenuClick: PropTypes.func,
  resetGameClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  show: state.screen === 'game',
});

const mapDispatchToProps = (dispatch) => ({
  goToMenuClick: () => {
    dispatch(hideSettings());
    setTimeout(() => {
      dispatch(resetMenu());
      dispatch(resetGame());
      dispatch(resetScreen());
    }, 300);
  },
  resetGameClick: () => {
    dispatch(hideSettings());
    dispatch(resetGame());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsWidgetResets);
