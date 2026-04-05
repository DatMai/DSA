/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let set = new Set();
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            if (board[i][j] === '.') continue;
            let row = `${board[i][j]} in r ${i}`;
            let column = `${board[i][j]} in c ${j}`;
            let box = `${board[i][j]} in b ${Math.floor(i / 3)}, ${Math.floor(j / 3)}`;
        
            if (set.has(row) || set.has(column) || set.has(box)) return false;

            set.add(row);
            set.add(column);
            set.add(box);
        }
    }

    return true;
};