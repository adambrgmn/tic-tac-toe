import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import ShowSettingsButton from './components/ShowSettingsButton';
import SettingsButton from './components/SettingsButton';
import SettingsWidgetResets from './components/SettingsWidgetResets';
import SettingsWidgetAiLevel from './components/SettingsWidgetAiLevel';
import SettingsWidgetCredits from './components/SettingsWidgetCredits';

import {
  showSettings,
  hideSettings,
} from '../../actions';

export function Settings({
  show,
  screen,
  showSettingsClick,
  hideSettingsClick,
}) {
  const cxContainer = {
    'settings-container': true,
    [`settings-container-${screen}`]: true,
    hide: !show,
  };

  return (
    <div className={classNames(cxContainer)}>
      <ShowSettingsButton onClick={showSettingsClick} />
      <div className="settings">
        <SettingsButton
          type="icon"
          text="hide settings"
          icon="hideSettings"
          onClick={hideSettingsClick}
        />

        <SettingsWidgetResets />
        <SettingsWidgetAiLevel />
        <SettingsWidgetCredits />
      </div>
    </div>
  );
}

Settings.propTypes = {
  show: PropTypes.bool,
  screen: PropTypes.string,
  showSettingsClick: PropTypes.func,
  hideSettingsClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  show: state.settings,
  screen: state.screen,
});

const mapDispatchToProps = (dispatch) => ({
  showSettingsClick: () => dispatch(showSettings()),
  hideSettingsClick: () => dispatch(hideSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
