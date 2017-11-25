export const chessmanTable: { [id: number]: { name: string, color: string } } = {
    1: { name: '車', color: 'black' },
    2: { name: '马', color: 'black' },
    3: { name: '相', color: 'black' },
    4: { name: '士', color: 'black' },
    5: { name: '将', color: 'black' },
    6: { name: '炮', color: 'black' },
    7: { name: '兵', color: 'black' },


    8: { name: '車', color: 'red' },
    9: { name: '马', color: 'red' },
    10: { name: '相', color: 'red' },
    11: { name: '士', color: 'red' },
    12: { name: '将', color: 'red' },
    13: { name: '炮', color: 'red' },
    14: { name: '兵', color: 'red' }
}

export const defaultBoard = [
    [1, 2, 3, 4, 5, 4, 3, 2, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 6, 0, 0, 0, 0, 0, 6, 0],
    [7, 0, 7, 0, 7, 0, 7, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [14, 0, 14, 0, 14, 0, 14, 0, 14],
    [0, 13, 0, 0, 0, 0, 0, 13, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 9, 10, 11, 12, 11, 10, 9, 8]
]