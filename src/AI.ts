//棋子在不同位置的分数
const PRICE_TABLE = {
    1: [//车
        [0x0ce, 0x0d0, 0x0cf, 0x0d5, 0x0d6, 0x0d5, 0x0cf, 0x0d0, 0x0ce],
        [0x0ce, 0x0d4, 0x0d1, 0x0d8, 0x0e9, 0x0d8, 0x0d1, 0x0d4, 0x0ce],
        [0x0ce, 0x0d0, 0x0cf, 0x0d6, 0x0d8, 0x0d6, 0x0cf, 0x0d0, 0x0ce],
        [0x0ce, 0x0d5, 0x0d5, 0x0d8, 0x0d8, 0x0d8, 0x0d5, 0x0d5, 0x0ce],
        [0x0d0, 0x0d3, 0x0d3, 0x0d6, 0x0d7, 0x0d6, 0x0d3, 0x0d3, 0x0d0],
        [0x0d0, 0x0d4, 0x0d4, 0x0d6, 0x0d7, 0x0d6, 0x0d4, 0x0d4, 0x0d0],
        [0x0cc, 0x0d1, 0x0cc, 0x0d4, 0x0d6, 0x0d4, 0x0cc, 0x0d1, 0x0cc],
        [0x0c6, 0x0d0, 0x0cc, 0x0d4, 0x0d4, 0x0d4, 0x0cc, 0x0d0, 0x0c6],
        [0x0c8, 0x0d0, 0x0ce, 0x0d4, 0x0c8, 0x0d4, 0x0ce, 0x0d0, 0x0c8],
        [0x0c2, 0x0ce, 0x0cc, 0x0d4, 0x0c8, 0x0d4, 0x0cc, 0x0ce, 0x0c2]
    ],
    2: [//马
        [0x05a, 0x05a, 0x05a, 0x060, 0x05a, 0x060, 0x05a, 0x05a, 0x05a],
        [0x05a, 0x060, 0x067, 0x061, 0x05e, 0x061, 0x067, 0x060, 0x05a],
        [0x05c, 0x062, 0x063, 0x067, 0x063, 0x067, 0x063, 0x062, 0x05c],
        [0x05d, 0x06c, 0x064, 0x06b, 0x064, 0x06b, 0x064, 0x06c, 0x05d],
        [0x05a, 0x064, 0x063, 0x067, 0x068, 0x067, 0x063, 0x064, 0x05a],
        [0x05a, 0x062, 0x065, 0x066, 0x067, 0x066, 0x065, 0x062, 0x05a],
        [0x05c, 0x05e, 0x062, 0x05f, 0x062, 0x05f, 0x062, 0x05e, 0x05c],
        [0x05d, 0x05c, 0x05e, 0x05f, 0x05c, 0x05f, 0x05e, 0x05c, 0x05d],
        [0x055, 0x05a, 0x05c, 0x05d, 0x04e, 0x05d, 0x05c, 0x05a, 0x055],
        [0x058, 0x055, 0x05a, 0x058, 0x05a, 0x058, 0x05a, 0x055, 0x058]
    ],
    3: [//相
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x014, 0x000, 0x000, 0x000, 0x014, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x012, 0x000, 0x000, 0x014, 0x017, 0x014, 0x000, 0x000, 0x012],
        [0x000, 0x000, 0x000, 0x000, 0x017, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x014, 0x014, 0x000, 0x014, 0x014, 0x000, 0x000]
    ],
    4: [//士
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x014, 0x000, 0x000, 0x000, 0x014, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x012, 0x000, 0x000, 0x014, 0x017, 0x014, 0x000, 0x000, 0x012],
        [0x000, 0x000, 0x000, 0x000, 0x017, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x014, 0x014, 0x000, 0x014, 0x014, 0x000, 0x000]
    ],
    5: [//将
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0xff1, 0xff1, 0xff1, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0xff2, 0xff2, 0xff2, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0xffb, 0xfff, 0xffb, 0x000, 0x000, 0x000]
    ],
    6: [//炮
        [0x064, 0x064, 0x060, 0x05b, 0x05a, 0x05b, 0x060, 0x064, 0x064],
        [0x062, 0x062, 0x060, 0x05c, 0x059, 0x05c, 0x060, 0x062, 0x062],
        [0x061, 0x061, 0x060, 0x05b, 0x05c, 0x05b, 0x060, 0x061, 0x061],
        [0x060, 0x063, 0x063, 0x062, 0x064, 0x062, 0x063, 0x063, 0x060],
        [0x060, 0x060, 0x060, 0x060, 0x064, 0x060, 0x060, 0x060, 0x060],
        [0x05f, 0x060, 0x063, 0x060, 0x064, 0x060, 0x063, 0x060, 0x05f],
        [0x060, 0x060, 0x060, 0x060, 0x060, 0x060, 0x060, 0x060, 0x060],
        [0x061, 0x060, 0x064, 0x063, 0x065, 0x063, 0x064, 0x060, 0x061],
        [0x060, 0x061, 0x062, 0x062, 0x062, 0x062, 0x062, 0x061, 0x060],
        [0x060, 0x060, 0x061, 0x063, 0x063, 0x063, 0x061, 0x060, 0x060]
    ],
    7: [//兵
        [0x009, 0x009, 0x009, 0x00b, 0x00d, 0x00b, 0x009, 0x009, 0x009],
        [0x013, 0x018, 0x022, 0x02a, 0x02c, 0x02a, 0x022, 0x018, 0x013],
        [0x013, 0x018, 0x020, 0x025, 0x025, 0x025, 0x020, 0x018, 0x013],
        [0x013, 0x017, 0x01b, 0x01d, 0x01e, 0x01d, 0x01b, 0x017, 0x013],
        [0x00e, 0x012, 0x014, 0x01b, 0x01d, 0x01b, 0x014, 0x012, 0x00e],
        [0x007, 0x000, 0x00d, 0x000, 0x010, 0x000, 0x00d, 0x000, 0x007],
        [0x007, 0x000, 0x007, 0x000, 0x00f, 0x000, 0x007, 0x000, 0x007],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000],
        [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000]
    ]
}

//定义棋子的ID
export const chessmanTable: { [id: number]: { name: string, color: string } } = {
    1: { name: '車', color: 'black' },
    2: { name: '馬', color: 'black' },
    3: { name: '象', color: 'black' },
    4: { name: '士', color: 'black' },
    5: { name: '将', color: 'black' },
    6: { name: '炮', color: 'black' },
    7: { name: '卒', color: 'black' },

    8: { name: '車', color: 'red' },
    9: { name: '馬', color: 'red' },
    10: { name: '相', color: 'red' },
    11: { name: '仕', color: 'red' },
    12: { name: '帥', color: 'red' },
    13: { name: '炮', color: 'red' },
    14: { name: '兵', color: 'red' }
}


//开局棋子的布局
export const startBoard = [
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

const isNone = (id: number) => id == 0
const isRed = (id: number) => id != 0 && id >= 8
const isBlack = (id: number) => id != 0 && id <= 7

//检查是否超出范围
const checkRange = (x: number, y: number) =>
    x >= 0 && x < 9 && y >= 0 && y < 10

const check田 = (x: number, y: number) =>
    (x >= 3 && x <= 5) && ((y >= 0 && y <= 2) || (y >= 7 && y <= 9))

//对方棋子
const diff = (board: number[][], x1: number, y1: number, x2: number, y2: number) => {
    const id1 = board[y1][x1]
    const id2 = board[y2][x2]
    return ((isRed(id2) && isBlack(id1)) || (isRed(id1) && isBlack(id2)))
}

//结束点是空 或者是 对方棋子
const 可以落点 = (board: number[][], x1: number, y1: number, x2: number, y2: number) =>
    checkRange(x2, y2) && (board[y2][x2] == 0 || diff(board, x1, y1, x2, y2))


const 直走隔几个可以吃 = (n: number) => (board: number[][], x: number, y: number) => {
    let arr: { x: number, y: number }[] = []
    //左
    for (let i = x - 1, c = -1; i >= 0; i--) {
        if (board[y][i] == 0) {
            if (c == -1) arr.push({ x: i, y: y })
        }
        else {
            c++
            if (c == n) {
                if (diff(board, x, y, i, y))
                    arr.push({ x: i, y: y })
                break
            }
        }
    }

    //右
    for (let i = x + 1, c = -1; i < 9; i++) {
        if (board[y][i] == 0) {
            if (c == -1) arr.push({ x: i, y: y })
        }
        else {
            c++
            if (c == n) {
                if (diff(board, x, y, i, y))
                    arr.push({ x: i, y: y })
                break
            }
        }
    }

    //上
    for (let i = y - 1, c = -1; i >= 0; i--) {
        if (board[i][x] == 0) {
            if (c == -1) arr.push({ x: x, y: i })
        }
        else {
            c++
            if (c == n) {
                if (diff(board, x, y, x, i))
                    arr.push({ x: x, y: i })
                break
            }
        }
    }

    //下
    for (let i = y + 1, c = -1; i < 10; i++) {
        if (board[i][x] == 0) {
            if (c == -1) arr.push({ x: x, y: i })
        }
        else {
            c++
            if (c == n) {
                if (diff(board, x, y, x, i))
                    arr.push({ x: x, y: i })
                break
            }
        }
    }
    return arr
}

const 车所有走法 = 直走隔几个可以吃(0)
const 炮所有走法 = 直走隔几个可以吃(1)

export const 马所有走法 = (board: number[][], x: number, y: number) => {

    const table = [
        { over: [1, 2], only0: [0, 1] },
        { over: [1, -2], only0: [0, -1] },
        { over: [-1, 2], only0: [0, 1] },
        { over: [-1, -2], only0: [0, -1] },
        { over: [2, 1], only0: [1, 0] },
        { over: [2, -1], only0: [1, 0] },
        { over: [-2, 1], only0: [-1, 0] },
        { over: [-2, -1], only0: [-1, 0] },
    ]

    let arr: { x: number, y: number }[] = []

    for (let i = 0; i < table.length; i++) {
        const overX = x + table[i].over[0]
        const overY = y + table[i].over[1]
        const onlyX = x + table[i].only0[0]
        const onlyY = y + table[i].only0[1]

        if (
            (checkRange(onlyX, onlyY) && board[onlyY][onlyX] == 0) //没有挡住
            &&
            可以落点(board, x, y, overX, overY)
        ) {
            arr.push({ x: overX, y: overY })
        }
    }

    return arr
}

export const 相所有走法 = (board: number[][], x: number, y: number) => {
    let arr: { x: number, y: number }[] = []

    const table = [
        { over: [2, 2], only0: [1, 1] },
        { over: [2, -2], only0: [1, -1] },
        { over: [-2, 2], only0: [-1, 1] },
        { over: [-2, -2], only0: [-1, -1] }
    ]

    for (let i = 0; i < table.length; i++) {
        const overX = x + table[i].over[0]
        const overY = y + table[i].over[1]
        const onlyX = x + table[i].only0[0]
        const onlyY = y + table[i].only0[1]

        if ((y >= 5 && overY >= 5) || (y <= 4 && overY <= 4)) {//不能过河
            if (
                (checkRange(onlyX, onlyY) && board[onlyY][onlyX] == 0) //没有挡住
                &&
                可以落点(board, x, y, overX, overY) //结束点是空 或者是 对方棋子
            ) {
                arr.push({ x: overX, y: overY })
            }
        }
    }
    return arr
}

export const 士所有走法 = (board: number[][], x: number, y: number) => {
    let arr: { x: number, y: number }[] = []

    const table = [
        { over: [1, 1] },
        { over: [1, -1] },
        { over: [-1, 1] },
        { over: [-1, -1] }
    ]

    for (let i = 0; i < table.length; i++) {
        const overX = x + table[i].over[0]
        const overY = y + table[i].over[1]

        if (check田(overX, overY) && 可以落点(board, x, y, overX, overY)) {
            arr.push({ x: overX, y: overY })
        }

    }

    return arr
}

export const 将所有走法 = (board: number[][], x: number, y: number) => {
    let arr: { x: number, y: number }[] = []

    const table = [
        { over: [1, 0] },
        { over: [-1, 0] },
        { over: [0, 1] },
        { over: [0, -1] }
    ]

    for (let i = 0; i < table.length; i++) {
        const overX = x + table[i].over[0]
        const overY = y + table[i].over[1]

        if (check田(overX, overY) && (board[overY][overX] == 0 || diff(board, x, y, overX, overY))) {
            arr.push({ x: overX, y: overY })
        }

    }

    return arr
}


export const 兵所有走法 = (board: number[][], x: number, y: number) => {
    let arr: { x: number, y: number }[] = []
    if (board[y][x] == 14) {//红
        if (可以落点(board, x, y, x, y - 1))
            arr.push({ x: x, y: y - 1 })
        if (y <= 4) {
            if (可以落点(board, x, y, x - 1, y))
                arr.push({ x: x - 1, y: y })
            if (可以落点(board, x, y, x + 1, y))
                arr.push({ x: x + 1, y: y })
        }
    } else {
        if (可以落点(board, x, y, x, y + 1))
            arr.push({ x: x, y: y + 1 })
        if (y >= 5) {
            if (可以落点(board, x, y, x - 1, y))
                arr.push({ x: x - 1, y: y })
            if (可以落点(board, x, y, x + 1, y))
                arr.push({ x: x + 1, y: y })
        }
    }
    return arr
}


const forEach = (board: number[][], f: (id: number, x: number, y: number) => void) => {
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            f(board[y][x], x, y)
        }
    }
}

const fDic: { [id: number]: (board: number[][], x: number, y: number) => { x: number, y: number }[] } = {
    1: 车所有走法, 8: 车所有走法,
    2: 马所有走法, 9: 马所有走法,
    3: 相所有走法, 10: 相所有走法,
    4: 士所有走法, 11: 士所有走法,
    5: 将所有走法, 12: 将所有走法,
    6: 炮所有走法, 13: 炮所有走法,
    7: 兵所有走法, 14: 兵所有走法
}


//评价函数  黑方分数
const evaluate = (board: number[][]) => {
    let ret = 0
    forEach(board, (v, x, y) => {
        if (isBlack(v)) {
            ret += PRICE_TABLE[v][9 - y][x]//反转
        }
        if (isRed(v)) {
            ret -= PRICE_TABLE[v - 7][y][x] //!!!!!!!!!
        }
    })
    return ret
}

//全部走法
const all = (board: number[][], fx: 'red' | 'black') => {
    let arr: { x1: number, y1: number, x2: number, y2: number }[] = []
    forEach(board, (id, x, y) => {
        if (fx == 'red' && isRed(id)) {
            let a = fDic[id](board, x, y).map(v => ({ x1: x, y1: y, x2: v.x, y2: v.y }))
            arr.push(...a)
        }
        if (fx == 'black' && isBlack(id)) {
            let a = fDic[id](board, x, y).map(v => ({ x1: x, y1: y, x2: v.x, y2: v.y }))
            arr.push(...a)
        }
    })
    return arr
}

export const 可以走 = (board: number[][], x1: number, y1: number, x2: number, y2: number) =>
    all(board, 'red').find(v => v.x1 == x1 && v.y1 == y1 && v.x2 == x2 && v.y2 == y2) != null
