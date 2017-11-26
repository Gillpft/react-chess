import * as React from 'react';

import { Button } from './Button'
import { Chessman } from './Chessman'

import './GameStartBoard.css'
import { startBoard, chessmanTable, moveRule, getStep } from './AI'

const S = {
  board: startBoard,
  redChessmanID: 0,
  redChessmanX: -1,
  redChessmanY: -1,
  blackChessmanX: -1,
  blackChessmanY: -1
}

export class GameStartBoard extends React.Component<{}, typeof S> {

  componentWillMount() {
    this.setState(S)
  }

  onClick(id: number, x: number, y: number) {
    if (id > 7) {
      this.setState({
        redChessmanID: id,
        redChessmanX: x,
        redChessmanY: y,
        blackChessmanX: -1,
        blackChessmanY: -1,
      })
    } else if (this.state.redChessmanID != 0) {

      let b = moveRule(this.state.board, this.state.redChessmanX, this.state.redChessmanY, x, y)
      if (b) {
        this.state.board[this.state.redChessmanY][this.state.redChessmanX] = 0
        this.state.board[y][x] = this.state.redChessmanID

        this.setState({
          redChessmanID: 0,
          redChessmanX: -1,
          redChessmanY: -1,
          blackChessmanX: -1,
          blackChessmanY: -1
        })

        getStep(this.state.board, ft => {
          let fID = this.state.board[ft.from.y][ft.from.x]
          this.state.board[ft.from.y][ft.from.x] = 0
          this.state.board[ft.to.y][ft.to.x] = fID

          this.setState({
            redChessmanID: 0,
            redChessmanX: -1,
            redChessmanY: -1,
            blackChessmanX: ft.to.x,
            blackChessmanY: ft.to.y,
          })
        })


      }

    }
  }

  render() {
    return <div className='gameStartBoard'>
        <div className='checkerboard'>
          <img className='checkerboardImg' src='Checkerboard.png'></img>
          {this.state.board.map((V, y) => {
            return V.map((v, x) => {
              return v ?
                <Chessman
                  high={(x == this.state.redChessmanX && y == this.state.redChessmanY) || (x == this.state.blackChessmanX && y == this.state.blackChessmanY)}
                  key={x.toString() + '.' + y.toString()}
                  x={x * 59 + 10}
                  y={y * 58 + 9}
                  color={chessmanTable[v].color}
                  name={chessmanTable[v].name}
                  onClick={() => this.onClick(v, x, y)} />
                : <Chessman
                  high={false}
                  key={x.toString() + '.' + y.toString()}
                  x={x * 59 + 10}
                  y={y * 58 + 9}
                  onClick={() => this.onClick(v, x, y)} />
            })
          })}
        </div>
      </div>
  }
}
