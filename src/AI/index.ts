type Coord = { x: number, y: number }
type FromTo = { from: Coord, to: Coord }

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

const isRed = (id: number) => id != 0 && id >= 8
const isBlack = (id: number) => id != 0 && id <= 7
const getID = (board: number[][], coord: Coord) => board[coord.y][coord.x]

const impureSetID = (board: number[][], coord: Coord, id: number) => board[coord.y][coord.x] = id

const checkRange = (coord: Coord) =>
    coord.x >= 0 && coord.x < 9 && coord.y >= 0 && coord.y < 10

const checkTian = (coord: Coord) =>
    (coord.x >= 3 && coord.x <= 5)
    &&
    ((coord.y >= 0 && coord.y <= 2) || (coord.y >= 7 && coord.y <= 9))

//对方棋子
const diff = (board: number[][], ft: FromTo) => {
    const id1 = getID(board, ft.from)
    const id2 = getID(board, ft.to)
    return ((isRed(id2) && isBlack(id1)) || (isRed(id1) && isBlack(id2)))
}

//结束点是空 或者是 对方棋子
const canFall = (board: number[][], ft: FromTo) =>
    checkRange(ft.to) && (getID(board, ft.to) == 0 || diff(board, ft))


const numInterval = (n: number) => (board: number[][], from: Coord) => {
    const { x, y } = from
    let arr: Coord[] = []
    //左
    for (let i = x - 1, c = -1; i >= 0; i--) {
        if (getID(board, { x: i, y }) == 0) {
            if (c == -1) arr.push({ x: i, y: y })
        }
        else {
            c++
            if (c == n) {
                if (diff(board, { from, to: { x: i, y: y } }))
                    arr.push({ x: i, y: y })
                break
            }
        }
    }

    //右
    for (let i = x + 1, c = -1; i < 9; i++) {
        if (getID(board, { x: i, y }) == 0) {
            if (c == -1) arr.push({ x: i, y: y })
        }
        else {
            c++
            if (c == n) {
                if (diff(board, { from, to: { x: i, y: y } }))
                    arr.push({ x: i, y: y })
                break
            }
        }
    }

    //上
    for (let i = y - 1, c = -1; i >= 0; i--) {
        if (getID(board, { x, y: i }) == 0) {
            if (c == -1) arr.push({ x: x, y: i })
        }
        else {
            c++
            if (c == n) {
                if (diff(board, { from, to: { x, y: i } }))
                    arr.push({ x: x, y: i })
                break
            }
        }
    }

    //下
    for (let i = y + 1, c = -1; i < 10; i++) {
        if (getID(board, { x, y: i }) == 0) {
            if (c == -1) arr.push({ x: x, y: i })
        }
        else {
            c++
            if (c == n) {
                if (diff(board, { from, to: { x, y: i } }))
                    arr.push({ x: x, y: i })
                break
            }
        }
    }
    return arr
}

//车
const waysFor1and8 = numInterval(0)

//炮
const waysFor6and13 = numInterval(1)

//马
export const waysFor2and9 = (board: number[][], from: Coord) => {

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

    let arr: Coord[] = []

    for (let i = 0; i < table.length; i++) {
        const to = {
            x: from.x + table[i].over[0],
            y: from.y + table[i].over[1]
        }
        const only = {
            x: from.x + table[i].only0[0],
            y: from.y + table[i].only0[1]
        }

        if (
            (checkRange(only) && getID(board, only) == 0) //没有挡住
            &&
            canFall(board, { from, to })
        ) {
            arr.push(to)
        }
    }

    return arr
}

//相
export const waysFor3and10 = (board: number[][], from: Coord) => {
    let arr: Coord[] = []

    const table = [
        { over: [2, 2], only0: [1, 1] },
        { over: [2, -2], only0: [1, -1] },
        { over: [-2, 2], only0: [-1, 1] },
        { over: [-2, -2], only0: [-1, -1] }
    ]

    for (let i = 0; i < table.length; i++) {
        const to = {
            x: from.x + table[i].over[0],
            y: from.y + table[i].over[1]
        }
        const only = {
            x: from.x + table[i].only0[0],
            y: from.y + table[i].only0[1]
        }

        if ((from.y >= 5 && to.y >= 5) || (from.y <= 4 && to.y <= 4)) {//不能过河
            if (
                (checkRange(only) && getID(board, only) == 0) //没有挡住
                &&
                canFall(board, { from, to }) //结束点是空 或者是 对方棋子
            ) {
                arr.push(to)
            }
        }
    }
    return arr
}

//士
export const waysFor4and11 = (board: number[][], from: Coord) => {
    let arr: Coord[] = []

    const table = [
        { over: [1, 1] },
        { over: [1, -1] },
        { over: [-1, 1] },
        { over: [-1, -1] }
    ]

    for (let i = 0; i < table.length; i++) {
        const to = {
            x: from.x + table[i].over[0],
            y: from.y + table[i].over[1]
        }

        if (checkTian(to) && canFall(board, { from, to })) {
            arr.push(to)
        }

    }

    return arr
}

//将
export const waysFor5and12 = (board: number[][], from: Coord) => {
    let arr: Coord[] = []

    const table = [
        { over: [1, 0] },
        { over: [-1, 0] },
        { over: [0, 1] },
        { over: [0, -1] }
    ]

    for (let i = 0; i < table.length; i++) {
        const to = {
            x: from.x + table[i].over[0],
            y: from.y + table[i].over[1]
        }

        if (checkTian(to) && canFall(board, { from, to })) {
            arr.push(to)
        }
    }
    return arr
}

//兵
export const waysFor7and14 = (board: number[][], from: Coord) => {
    const { x, y } = from
    let arr: Coord[] = []
    if (board[y][x] == 14) {//红
        if (canFall(board, { from, to: { x, y: y - 1 } }))
            arr.push({ x: x, y: y - 1 })
        if (y <= 4) {
            if (canFall(board, { from, to: { x: x - 1, y: y } }))
                arr.push({ x: x - 1, y: y })
            if (canFall(board, { from, to: { x: x + 1, y: y } }))
                arr.push({ x: x + 1, y: y })
        }
    } else {
        if (canFall(board, { from, to: { x: x, y: y + 1 } }))
            arr.push({ x: x, y: y + 1 })
        if (y >= 5) {
            if (canFall(board, { from, to: { x: x - 1, y: y } }))
                arr.push({ x: x - 1, y: y })
            if (canFall(board, { from, to: { x: x + 1, y: y } }))
                arr.push({ x: x + 1, y: y })
        }
    }
    return arr
}

//遍历
const forEach = (board: number[][], f: (id: number, coord: Coord) => void) => {
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            f(board[y][x], { x, y })
        }
    }
}

//规则字典
const fDic: { [id: number]: (board: number[][], coord: Coord) => Coord[] } = {
    1: waysFor1and8, 8: waysFor1and8,
    2: waysFor2and9, 9: waysFor2and9,
    3: waysFor3and10, 10: waysFor3and10,
    4: waysFor4and11, 11: waysFor4and11,
    5: waysFor5and12, 12: waysFor5and12,
    6: waysFor6and13, 13: waysFor6and13,
    7: waysFor7and14, 14: waysFor7and14
}

//黑方
export const getStep = (board: number[][], f: (ft: FromTo) => void) => {
    setTimeout(() => {
        f(maxMinSearch(board).ft)
    }, 0);
}

//最大 最小 搜索  //黑方是电脑
const maxMinSearch = (board: number[][], depth = 1) => {
    if (depth == 5) {
        return { ft: {} as FromTo, v: evaluate(board) }
    }
    let isBlack = depth % 2 == 1
    let arr = all(board, isBlack ? 'black' : 'red')
    let ret = { ft: arr[0], v: isBlack ? -999999 : 999999 }

    for (let i = 0; i < arr.length; i++) {
        let ft = arr[i]

        //改变board
        let fromID = getID(board, ft.from)
        let toID = getID(board, ft.to)
        impureSetID(board, ft.from, 0)
        impureSetID(board, ft.to, fromID)

        let xxx = maxMinSearch(board, depth + 1)
        if (isBlack && ret.v < xxx.v) {
            //max
            ret.v = xxx.v
            ret.ft = ft
        } else if (isBlack == false && ret.v > xxx.v) {
            //min
            ret.v = xxx.v
            ret.ft = ft
        }

        //还原board
        impureSetID(board, ft.from, fromID)
        impureSetID(board, ft.to, toID)
    }
    return ret
}


//评价函数  黑方分数
const evaluate = (board: number[][]) => {
    let ret = 0
    forEach(board, (id, coord) => {
        if (isBlack(id)) {
            ret += PRICE_TABLE[id][9 - coord.y][coord.x]//反转
        }
        if (isRed(id)) {
            ret -= PRICE_TABLE[id - 7][coord.y][coord.x] //!!!!!!!!!
        }
    })
    return ret
}

//全部走法
const all = (board: number[][], fx: 'red' | 'black') => {
    let arr: FromTo[] = []
    forEach(board, (id, coord) => {
        if (fx == 'red' && isRed(id)) {
            let a = fDic[id](board, coord).map(v => ({ from: coord, to: v }))
            arr.push(...a)
        }
        if (fx == 'black' && isBlack(id)) {
            let a = fDic[id](board, coord).map(v => ({ from: coord, to: v }))
            arr.push(...a)
        }
    })
    return arr
}

export const moveRule = (board: number[][], x1: number, y1: number, x2: number, y2: number) =>
    all(board, 'red').find(v => v.from.x == x1 && v.from.y == y1 && v.to.x == x2 && v.to.y == y2) != null