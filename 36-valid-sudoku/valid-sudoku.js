/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let subStartPositionSudoku = [
        [0, 0], [0, 3], [0, 6],
        [3, 0], [3, 3], [3, 6],
        [6, 0], [6, 3], [6, 6],
    ];

    for (let i = 0; i < board.length; ++i) {
        let rowCache = new Map();
        for (let j = 0; j < board[i].length; ++j) {
            if (!rowCache.has(board[i][j]) && board[i][j] != '.') {
                rowCache.set(board[i][j], board[i][j]);
            } else if (board[i][j] != '.') {
                return false;

            }
        }
    }

    for (let i = 0; i < board.length; ++i) {
        let columnCache = new Map();
        for (let j = 0; j < board[i].length; ++j) {
            if (!columnCache.has(board[j][i]) && board[j][i] != '.') {
                columnCache.set(board[j][i], board[j][i]);
            } else if (board[j][i] != '.') {
                return false;
            }
        }
    }

    for (let s = 0; s < subStartPositionSudoku.length; ++s) {
        let init_r = subStartPositionSudoku[s][0];
        let init_c = subStartPositionSudoku[s][1];

        let subSudokuCache = new Map();
        for (let i = init_r; i < init_r + 3; ++i) {
            for (let j = init_c; j < init_c + 3; ++j) {
                if (!subSudokuCache.has(board[i][j]) && board[i][j] != '.') {
                    subSudokuCache.set(board[i][j]);
                }
                else if (board[i][j] != '.') {
                    return false;
                }
            }
        }
    }

    return true;
};
