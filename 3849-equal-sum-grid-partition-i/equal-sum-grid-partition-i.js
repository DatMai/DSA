/**
- POSITIVE INTEGERS

Luckily it's a vertical/horizontal cut.
This means we an effectively reduce this to down to 1D array problem

Oncce reduced, an array of the form [x_i] is obtained, or simply [1,2,3,4,5] as an example
Then we compare 2 values as we iterate over the array, comparing prefix and suffix

 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    var compare = function(arr) {
        const sum = arr.reduce((acc, curr) => acc += curr, 0);
        let prefix = 0;
        let suffix = sum;

        for (let i = 0; i < arr.length; i++) {
            prefix += arr[i]
            suffix -= arr[i]

            if (prefix === suffix) {
                return true;
            }
        }

        return false;
    }

    const m = grid.length
    const n = grid[0].length

    const verticalArr = grid.map(r => r.reduce((acc, curr) => acc += curr, 0))
    const horizontalArr = [];

    for (let j = 0; j < n; j++) {
        let sum = 0;
        for (let i = 0; i < m; i++) {
            sum += grid[i][j]
        }
        horizontalArr[j] = sum
    }

    console.log(horizontalArr)
    console.log(verticalArr)

    // verticalArr and HorizontalArr prepped. now compare

    return compare(horizontalArr) || compare(verticalArr)

};