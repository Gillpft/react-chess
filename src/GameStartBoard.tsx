import * as React from 'react';

import { Button } from './Button'
import { Chessman } from './Chessman'

import './GameStartBoard.css'
import { startBoard, chessmanTable, 可以走, getStep } from './AI'

const S = {
  board: startBoard,
  点击的棋子的ID: 0,
  点击的棋子的x: -1,
  点击的棋子的y: -1,
  黑色的棋子的x: -1,
  黑色的棋子的y: -1
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
        点击的棋子的y: y,
        黑色的棋子的x: -1,
        黑色的棋子的y: -1,
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
          点击的棋子的y: -1,
          黑色的棋子的x: obj.ft.to.x,
          黑色的棋子的y: obj.ft.to.y,
        })
      }

    }
  }

  render() {
    return <div className='gameStartBoard'>
      <div>
        <div className='checkerboard'>
          <img className='checkerboardImg' src='Checkerboard.png'></img>
          {this.state.board.map((V, y) => {
            return V.map((v, x) => {
              return v ?
                <Chessman
                  high={(x == this.state.点击的棋子的x && y == this.state.点击的棋子的y) || (x == this.state.黑色的棋子的x && y == this.state.黑色的棋子的y)}
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
