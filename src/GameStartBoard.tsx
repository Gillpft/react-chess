import * as React from 'react';

import { Button } from './Button'
import { Chessman } from './Chessman'

import './GameStartBoard.css'
import { startBoard, chessmanTable, 可以走, getStep } from './AI'

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

  onClick(id: number, x: number, y: number) {
    if (id > 7) {
      this.setState({
        点击的棋子的ID: id,
        点击的棋子的x: x,
        点击的棋子的y: y
      })
    } else if (this.state.点击的棋子的ID != 0) {

      let b = 可以走(this.state.board, this.state.点击的棋子的x, this.state.点击的棋子的y, x, y)
      if (b) {
        this.state.board[this.state.点击的棋子的y][this.state.点击的棋子的x] = 0
        this.state.board[y][x] = this.state.点击的棋子的ID

        let obj = getStep(this.state.board)

        let fID = this.state.board[obj.ft.from.y][obj.ft.from.x]
        this.state.board[obj.ft.from.y][obj.ft.from.x] = 0
        this.state.board[obj.ft.to.y][obj.ft.to.x] = fID



        this.setState({
          点击的棋子的ID: 0,
          点击的棋子的x: -1,
          点击的棋子的y: -1
        })
      }

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
                  onClick={() => this.onClick(v, x, y)} />
                : <Chessman
                  high={false}
                  key={x.toString() + '.' + y.toString()}
                  x={x * 59 + 10}
                  y={y * 53 + 9}
                  onClick={() => this.onClick(v, x, y)} />
            })
          })}
        </div>
      </div>
    </div>
  }
}
