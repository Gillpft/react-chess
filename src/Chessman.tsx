import * as React from 'react';

import './Chessman.css';

export const Chessman = (p: { chessmantext: string, color: string, x: number, y: number }) => {
    return <div className='chessmanBox' style={{ marginLeft: p.x, marginTop: p.y }}>
        <div className="bg bg-blur"></div>
        <div className='contentred content-front' style={{ color: p.color }}>{p.chessmantext}</div>
    </div>
}