import * as React from 'react';

import { Checkerboard } from './Checkerboard'
import { Button } from './Button'

import './GameStartBoard.css';

const S = {
  chessmen: [{
    id: {
      color: 'rgb(167, 2, 2)',
      name: '俥'
    },
    pos: {
      x: 0,
      y: 9
    }
  }]
}

export class GameStartBoard extends React.Component<{}, typeof S> {

  componentWillMount() {
    this.setState(S)
  }

  render() {
    return <div className='gameStartBoard'>
      <div className='gameStartBoardTop'>
        <Button img='home.png' className='homeButton' onclick={() => 1} />
        <Button text='悔棋' className='undoButton' onclick={() => 1} />
      </div>
      <Checkerboard
        x={this.state.chessmen[0].pos.x}
        y={this.state.chessmen[0].pos.y}
        color={this.state.chessmen[0].id.color}
        name={this.state.chessmen[0].id.name} />
    </div>
  }
}
