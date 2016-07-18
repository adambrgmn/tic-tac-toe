import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import ShowSettingsButton from './components/ShowSettingsButton';
import SettingsButton from './components/SettingsButton';
import { aiLevels } from '../../constants';
import {
  showSettings,
  hideSettings,
  resetGame,
  resetMenu,
  resetScreen,
  setAiLevel,
} from '../../actions';

export function Settings({
  show,
  screen,
  aiLevel,
  showSettingsClick,
  hideSettingsClick,
  goToMenuClick,
  resetGameClick,
  setAiLevelClick,
}) {
  const cxContainer = {
    'settings-container': true,
    [`settings-container-${screen}`]: true,
    hide: !show,
  };

  const hideSettingsButton = (
    <SettingsButton
      type="icon"
      text="hide settings"
      icon="hideSettings"
      onClick={hideSettingsClick}
    />
  );

  const goToMenuButton = screen === 'game' ? (
    <SettingsButton
      type="text"
      text="Go to menu"
      onClick={goToMenuClick}
    />
  ) : null;

  const resetGameButton = screen === 'game' ? (
    <SettingsButton
      type="text"
      text="Reset game"
      onClick={resetGameClick}
    />
  ) : null;

  const aiLevelSection = screen === 'game' ? (
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
  ) : null;

  const creditsSection = (
    <div className="settings-section settings-section-credits">
      <h3>About:</h3>
      <p>This is a small and very simple game build as part of a challenge from <a href="https://frecodecamp.com/">FreeCodeCamp</a>.</p>
      <p>It built by me, <a href="http://fransvilhelm.com/">Adam Bergman</a>. Hope you enjoy it!</p>
    </div>
  );

  return (
    <div className={classNames(cxContainer)}>
      <ShowSettingsButton onClick={showSettingsClick} />
      <div className="settings">
        {hideSettingsButton}
        {goToMenuButton}
        {resetGameButton}

        {aiLevelSection}
        {creditsSection}
      </div>
    </div>
  );
}

Settings.propTypes = {
  show: PropTypes.bool,
  screen: PropTypes.string,
  aiLevel: PropTypes.number,
  showSettingsClick: PropTypes.func,
  hideSettingsClick: PropTypes.func,
  goToMenuClick: PropTypes.func,
  resetGameClick: PropTypes.func,
  setAiLevelClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  show: state.settings,
  screen: state.screen,
  aiLevel: state.aiLevel,
});

const mapDispatchToProps = (dispatch) => ({
  showSettingsClick: () => dispatch(showSettings()),
  hideSettingsClick: () => dispatch(hideSettings()),
  goToMenuClick: () => {
    dispatch(hideSettings());
    dispatch(resetMenu());
    dispatch(resetGame());
    dispatch(resetScreen());
  },
  resetGameClick: () => {
    dispatch(hideSettings());
    dispatch(resetGame());
  },
  setAiLevelClick: (level) => {
    dispatch(setAiLevel(level));
    dispatch(hideSettings());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
