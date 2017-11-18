import * as React from 'react';

import { Checkerboard } from './Checkerboard'
import { Button } from './Button'

import './GameStartBoard.css';


const S = {
}

export class GameStartBoard extends React.Component<{}, typeof S> {
  render() {
    return <div className='gameStartBoard'>
    <div className='gameStartBoardTop'>
      <Button img='home.png' className='homeButton' onclick={() => 1} />
      <Button text='悔棋' className='undoButton' onclick={() => 1} />
    </div>
      <Checkerboard />
      
    </div>
  }
}
