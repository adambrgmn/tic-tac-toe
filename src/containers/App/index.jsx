import React from 'react';


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

      <div className="section game">
        <div className="game-board-container">
          <svg className="game-board" viewBox="0 0 440 440">
            <g className="game-borders">
              <rect className="border-hori-1" x="140" y="70" width="10" height="300" />
              <rect className="border-hori-2" x="290" y="70" width="10" height="300" />
              <rect className="border-vert-1" x="70" y="140" width="300" height="10" />
              <rect className="border-vert-2" x="70" y="290" width="300" height="10" />
            </g>
            <g className="game-spots">
              <rect className="game-spot" x="300" y="300" width="140" height="140" />
              <rect className="game-spot" x="150" y="300" width="140" height="140" />
              <rect className="game-spot" y="300" width="140" height="140" />
              <rect className="game-spot" x="300" y="150" width="140" height="140" />
              <rect className="game-spot" x="150" y="150" width="140" height="140" />
              <rect className="game-spot" y="150" width="140" height="140" />
              <rect className="game-spot" x="300" width="140" height="140" />
              <rect className="game-spot" x="150" width="140" height="140" />
              <rect className="game-spot" width="140" height="140" />
            </g>
          </svg>
        </div>
        <div className="game-result">
          <p className="paragraph winner">x wins</p>
          <button className="btn btn-rematch">Rematch?</button>
        </div>
      </div>

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
