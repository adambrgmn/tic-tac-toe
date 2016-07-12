import React from 'react';

import GameBoardContainer from '../GameBoardContainer';

export default function App() {
  return (
    <div>
      <div className="section menu">
        <div className="btn-group level-0">
          <button className="btn btn-round btn-large btn-newGame">New game</button>

          <div className="btn-group level-1">
            <button className="btn btn-round btn-medium btn-vsFriend">vs friend</button>
            <button className="btn btn-round btn-medium btn-vsComputer">vs computer</button>

            <div className="btn-group level-2">
              <button className="btn btn-round btn-small btn-levelBlind">blind</button>
              <button className="btn btn-round btn-small btn-levelNovice">novice</button>
              <button className="btn btn-round btn-small btn-levelMaster">master</button>
            </div>
          </div>
        </div>
      </div>

      <GameBoardContainer />

      <button className="btn btn-xsmall btn-icon-settings">Show settings</button>

      <div className="section settings">
        <button className="btn btn-xsmall btn-icon-exit">Hide settings</button>
        <div className="settings-widgets">
          <div className="widget">
            <button className="btn btn-text">Go to menu</button>
          </div>
          <div className="widget">
            <button className="btn btn-text">Reset game</button>
          </div>
          <div className="widget">
            <p className="Computer level">
              <button className="btn btn-round btn-xsmall btn-levelBlind">blind</button>
              <button className="btn btn-round btn-xsmall btn-levelNovice">novice</button>
              <button className="btn btn-round btn-xsmall btn-levelMaster">master</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
