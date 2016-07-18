import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  setNextMenuState,
  setAiLevel,
  setGameMode,
  setNextScreen,
} from '../../../../actions';
import { gameModes, aiLevels, screens } from '../../../../constants';

import MenuButtonGroup from '../../../../components/MenuButtonGroup';
import MenuButton from '../../../../components/MenuButton';

export function Menu({ openCloseMenu, startNewGame, menuLevel }) {
  return (
    <div className="section section-menu">
      <MenuButtonGroup level={0}>
        <MenuButtonGroup level={1}>
          <MenuButtonGroup level={2}>
            <MenuButton
              text="master"
              icon="levelMaster"
              customClassName="menu-button-levelMaster"
              size="sm"
              onMenuButtonClick={() => startNewGame(gameModes.single, aiLevels.two)}
            />

            <MenuButton
              text="novice"
              icon="levelNovice"
              customClassName="menu-button-levelNovice"
              size="sm"
              onMenuButtonClick={() => startNewGame(gameModes.single, aiLevels.one)}
            />

            <MenuButton
              text="blind"
              icon="levelBlind"
              customClassName="menu-button-levelBlind"
              size="sm"
              onMenuButtonClick={() => startNewGame(gameModes.single, aiLevels.zero)}
            />
          </MenuButtonGroup>

          <MenuButton
            text="vs computer"
            icon="vsComputer"
            size="md"
            customClassName="menu-button-vsComputer"
            onMenuButtonClick={() => openCloseMenu(1, menuLevel)}
          />

          <MenuButton
            text="vs friend"
            icon="vsFriend"
            customClassName="menu-button-vsFriend"
            size="md"
            onMenuButtonClick={() => startNewGame(gameModes.multi)}
          />
        </MenuButtonGroup>

        <MenuButton
          text="new game"
          icon="newGame"
          customClassName="menu-button-newGame"
          size="lg"
          onMenuButtonClick={() => openCloseMenu(0, menuLevel)}
        />
      </MenuButtonGroup>
    </div>
  );
}

Menu.propTypes = {
  menuLevel: PropTypes.number,
  openCloseMenu: PropTypes.func,
  startNewGame: PropTypes.func,
};

const mapStateToProps = (state) => ({
  menuLevel: state.menu,
});

const mapDispatchToProps = (dispatch) => ({
  openCloseMenu: (level, currentLevel) => {
    if (level === currentLevel) return dispatch(setNextMenuState(level + 1));
    return dispatch(setNextMenuState(level));
  },
  startNewGame: (gameMode, aiLevel) => {
    if (gameMode === gameModes.single) {
      dispatch(setAiLevel(aiLevel));
    }

    dispatch(setGameMode(gameMode));
    dispatch(setNextScreen(screens.game));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
