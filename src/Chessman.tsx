import * as React from 'react';

import './Chessman.css';

export const Chessman = (p: { high: boolean, name?: string, color?: string, x: number, y: number, onClick: () => void }) => {
    if (p.name != null) {
        return <div className={p.high?'chessmanBox chessmanBox-high':'chessmanBox '} style={{ marginLeft: p.x, marginTop: p.y }} onClick={p.onClick}>
            <div className="bg bg-blur"></div>
            <div className='content content-front' style={{ color: p.color }}>{p.name}</div>
        </div>
    } else return <div className='blank' style={{ marginLeft: p.x, marginTop: p.y }} onClick={p.onClick}>
    </div>

}