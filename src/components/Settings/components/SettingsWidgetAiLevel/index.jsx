import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SettingsButton from '../SettingsButton';

import { aiLevels } from '../../../../constants';
import {
  hideSettings,
  setAiLevel,
} from '../../../../actions';

export function SettingsWidgetAiLevel({ show, aiLevel, setAiLevelClick }) {
  if (show) {
    return (
      <div className="settings-section settings-section-aiLevel">
        <h3>Computer level:</h3>
        <SettingsButton
          type="icon"
          text="Level blind"
          icon="levelBlind"
          active={aiLevel === aiLevels.zero}
          onClick={() => setAiLevelClick(aiLevels.zero)}
        />
        <SettingsButton
          type="icon"
          text="Level novice"
          icon="levelNovice"
          active={aiLevel === aiLevels.one}
          onClick={() => setAiLevelClick(aiLevels.one)}
        />
        <SettingsButton
          type="icon"
          text="Level master"
          icon="levelMaster"
          active={aiLevel === aiLevels.two}
          onClick={() => setAiLevelClick(aiLevels.two)}
        />
      </div>
    );
  }
  return null;
}

SettingsWidgetAiLevel.propTypes = {
  show: PropTypes.bool,
  aiLevel: PropTypes.number.isRequired,
  setAiLevelClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  show: state.screen === 'game',
  aiLevel: state.aiLevel,
});

const mapDispatchToProps = dispatch => ({
  setAiLevelClick: (level) => {
    dispatch(setAiLevel(level));
    dispatch(hideSettings());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsWidgetAiLevel);
