import * as React from 'react';

import { Button } from './Button'
import { Chessman } from './Chessman'

import './GameStartBoard.css'
import { startBoard, chessmanTable, 棋子规则 } from './AI'

const S = {
  board: startBoard,
  点击的棋子的ID: 0,
  点击的棋子的x: -1,
  点击的棋子的y: -1
}

export class GameStartBoard extends React.Component<{}, typeof S> {

  componentWillMount() {
    this.setState(S)
  }

  棋子点击 = (num: number, x: number, y: number) => {
    if (this.state.点击的棋子的x == x && this.state.点击的棋子的y == y) {
      this.setState({
        点击的棋子的ID: 0,
        点击的棋子的x: -1,
        点击的棋子的y: -1
      })
      return
    }
    if (this.state.点击的棋子的ID != 0) {
      this.空白处点击(x, y)
      return
    }
    this.setState({
      点击的棋子的ID: num,
      点击的棋子的x: x,
      点击的棋子的y: y
    })
  }

  空白处点击 = (x: number, y: number) => {
    if (this.state.点击的棋子的ID != 0 && 棋子规则(this.state.board, this.state.点击的棋子的x, this.state.点击的棋子的y, x, y)) {
      const xx = this.state.board
      xx[this.state.点击的棋子的y][this.state.点击的棋子的x] = 0
      xx[y][x] = this.state.点击的棋子的ID

      this.setState({
        点击的棋子的ID: 0,
        点击的棋子的x: -1,
        点击的棋子的y: -1,
        board: xx
      })
    }
  }

  render() {
    return <div className='gameStartBoard'>
      <div className='gameStartBoardTop'>
        <Button img='home.png' className='homeButton' onclick={() => 1} />
        <Button text='悔棋' className='undoButton' onclick={() => 1} />
      </div>
      <div>
        <div className='checkerboard'>
          <img className='checkerboardImg' src='Checkerboard.png'></img>
          {this.state.board.map((V, y) => {
            return V.map((v, x) => {
              return v ?
                <Chessman
                  high={x == this.state.点击的棋子的x && y == this.state.点击的棋子的y}
                  key={x.toString() + '.' + y.toString()}
                  x={x * 59 + 10}
                  y={y * 53 + 9}
                  color={chessmanTable[v].color}
                  name={chessmanTable[v].name}
                  onClick={() => this.棋子点击(v, x, y)} />
                : <Chessman
                  high={true}
                  key={x.toString() + '.' + y.toString()}
                  x={x * 59 + 10}
                  y={y * 53 + 9}
                  onClick={() => this.空白处点击(x, y)} />
            })
          })}
        </div>
      </div>
    </div>
  }
}
