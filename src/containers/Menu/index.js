import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ButtonGroup from '../../components/ButtonGroup';
import MenuButton from '../../components/MenuButton';

import { menuStates } from '../../constants';

export function Menu({ menuState }) {
  return (
    <ButtonGroup show={menuState === menuStates.root} customClassName="root">
      <MenuButton customClassName="btn-newGame">New game</MenuButton>
      <ButtonGroup show={menuState === menuStates.expanded} customClassName="expanded">
        <MenuButton customClassName="btn-vsFriend">vs. friend</MenuButton>
        <MenuButton customClassName="btn-vsComputer">vs. computer</MenuButton>
        <ButtonGroup show={menuState === menuStates.single} customClassName="single">
          <MenuButton customClassName="btn-levelBlind">blind</MenuButton>
          <MenuButton customClassName="btn-levelNovice">novice</MenuButton>
          <MenuButton customClassName="btn-levelMaster">master</MenuButton>
        </ButtonGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}

Menu.propTypes = {
  menuState: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  menuState: state.menu,
});

export default connect(mapStateToProps)(Menu);
