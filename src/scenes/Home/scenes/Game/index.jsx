import React from 'react';

import GameBoard from './components/GameBoard';
import WinnerMessage from './components/WinnerMessage';

export default function Game() {
  return (
    <div className="section section-game">
      <GameBoard />
      <WinnerMessage winner="x" />
    </div>
  );
}
