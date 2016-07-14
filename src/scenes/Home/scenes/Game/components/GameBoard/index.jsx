import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import GameBoardGroup from './GameBoardGroup';
import GameBoardBorder from './GameBoardBorder';
import GameBoardSpot from './GameBoardSpot';
import SVGRoot from '../../../../../../components/SVGRoot';

export function GameBoard({ brick }) {
  const lines = [
    { customClassName: 'vert-1', coordinates: { x1: 145, x2: 145, y1: 70, y2: 370 } },
    { customClassName: 'vert-2', coordinates: { x1: 295, x2: 295, y1: 70, y2: 370 } },
    { customClassName: 'hori-1', coordinates: { x1: 370, x2: 70, y1: 145, y2: 145 } },
    { customClassName: 'hori-2', coordinates: { x1: 370, x2: 70, y1: 295, y2: 295 } },
  ];

  return (
    <SVGRoot customClassName="game-board" width={440} height={440}>
      <GameBoardGroup>
        {lines.map(line => (
          <GameBoardBorder
            key={line.customClassName}
            {...line}
          />
        ))}
      </GameBoardGroup>
      <GameBoardGroup>
        {brick.map((spot, i) => (
          <GameBoardSpot
            key={i}
            index={i}
            player={spot}
          />
        ))}
      </GameBoardGroup>
    </SVGRoot>
  );
}

GameBoard.propTypes = {
  brick: PropTypes.instanceOf(List),
};

const mapStateToProps = (state) => ({
  brick: state.brick,
});

export default connect(mapStateToProps)(GameBoard);
