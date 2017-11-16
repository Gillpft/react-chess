import * as React from 'react';

import './Chessman.css';

export const Chessman = (p: { chessmantext: string,content:string }) => {
    return <div className='chessmanBox'>
        <div className="bg bg-blur"></div>
        <div className={p.content}>{p.chessmantext}</div>
    </div>
}