/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let set = new Set();
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            if (board[i][j] == '.') continue;
            let row = `number ${board[i][j]} in row ${i}`;
            let column = `number ${board[i][j]} in column ${j}`;
            let box = `number ${board[i][j]} in box (${Math.floor(i / 3)},${Math.floor(j / 3)})`;

            if (set.has(row) || set.has(column) || set.has(box)) return false;
            set.add(row);
            set.add(column);
            set.add(box);
        }
    }

    return true;
};