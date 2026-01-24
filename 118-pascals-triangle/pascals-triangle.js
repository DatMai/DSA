/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let arr = [[1]];
    
    for (let i = 1; i < numRows; i++) {
        arr.push(new Array(i + 1).fill(0));

        for (let j = 0; j < i + 1; j++) {
            arr[i][j] = j > 0 ? arr[i - 1][j - 1] : 0;
            arr[i][j] += j < i ? arr[i - 1][j] : 0;
        }
    }

    return arr;
};