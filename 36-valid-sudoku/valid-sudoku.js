var isValidSudoku = function (board) {
    let set = new Set();

    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            if (board[i][j] === '.') continue;

            let num = board[i][j];

            let row = `${num} in row ${i}`;
            let col = `${num} in col ${j}`;
            let box = `${num} in box ${Math.floor(i / 3)}-${Math.floor(j / 3)}`;

            if (set.has(row) || set.has(col) || set.has(box)) {
                return false;
            }

            set.add(row);
            set.add(col);
            set.add(box);
        }
    }

    return true;
};