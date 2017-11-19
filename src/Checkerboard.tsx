import * as React from 'react';

import './Checkerboard.css';

import { Chessman } from './Chessman';

export const Checkerboard = (p:{x:number,y:number,color:string,name:string}) => {
    return <div>
        <div className='checkerboard'>
            <img className='checkerboardImg' src='Checkerboard.png'></img>
            <Chessman color={p.color} x={p.x*59+10} y={p.y*53+9} chessmantext={p.name} />
        </div>
    </div>
}