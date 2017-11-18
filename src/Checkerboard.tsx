import * as React from 'react';

import './Checkerboard.css';

import { Chessman } from './Chessman';

export const Checkerboard = () => {
    return <div>
        <div className='checkerboard'>
            <img className='checkerboardImg' src='Checkerboard.png'></img>
            <Chessman color='rgb(131, 0, 0)' x={10} y={165} chessmantext='兵' />
        </div>
    </div>
}