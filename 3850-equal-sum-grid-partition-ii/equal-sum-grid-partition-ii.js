/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
  const m = grid.length, n = grid[0].length;
  // row sums & col sums
  const rowSum = new Array(m).fill(0);
  const colSum = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowSum[i] += grid[i][j];
      colSum[j] += grid[i][j];
    }
  }
  const totalSum = rowSum.reduce((a,b)=>a+b,0);

  // build total frequency map
  const totalCnt = new Map();
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      totalCnt.set(grid[i][j], (totalCnt.get(grid[i][j])||0) + 1);

  // helper to check map has value
  const hasInMap = (mp, v) => (mp.get(v) || 0) > 0;

  // ---------- HORIZONTAL cuts ----------
  // topCounts starts empty, bottomCounts = totalCnt
  const topCounts = new Map();
  const bottomCounts = new Map(totalCnt); // shallow copy of counts

  let prefix = 0; // sumTop as we move cut down
  for (let i = 1; i < m; i++) {
    // add row i-1 to topCounts, remove from bottomCounts
    for (let j = 0; j < n; j++) {
      const val = grid[i-1][j];
      topCounts.set(val, (topCounts.get(val)||0) + 1);
      bottomCounts.set(val, bottomCounts.get(val) - 1);
      if (bottomCounts.get(val) === 0) bottomCounts.delete(val);
    }
    prefix += rowSum[i-1];
    const sumTop = prefix;
    const sumBottom = totalSum - sumTop;
    if (sumTop === sumBottom) return true;
    const diff = Math.abs(sumTop - sumBottom);
    // decide which side is larger
    if (sumTop > sumBottom) {
      // need to find in top a removable cell == diff
      const topRows = i, topCols = n;
      // connectivity rule:
      if (topRows > 1 && topCols > 1) {
        if (hasInMap(topCounts, diff)) return true;
      } else if (topRows === 1) {
        // only endpoints allowed: row 0, cols 0 or n-1
        if (grid[0][0] === diff || grid[0][n-1] === diff) return true;
      } else if (topCols === 1) {
        // single column: allowed rows are 0 or i-1
        if (grid[0][0] === diff || grid[i-1][0] === diff) return true;
      }
    } else {
      // bottom larger: search in bottomCounts
      const bottomRows = m - i, bottomCols = n;
      if (bottomRows > 1 && bottomCols > 1) {
        if (hasInMap(bottomCounts, diff)) return true;
      } else if (bottomRows === 1) {
        // bottom is single row at index i
        if (grid[i][0] === diff || grid[i][n-1] === diff) return true;
      } else if (bottomCols === 1) {
        // single column: allowed rows are i or m-1 at col 0
        if (grid[i][0] === diff || grid[m-1][0] === diff) return true;
      }
    }
  }

  // ---------- VERTICAL cuts ----------
  // leftCounts empty, rightCounts = totalCnt
  const leftCounts = new Map();
  const rightCounts = new Map(totalCnt);
  let prefixCol = 0;
  for (let j = 1; j < n; j++) {
    // add column j-1 to leftCounts, remove from rightCounts
    for (let i = 0; i < m; i++) {
      const val = grid[i][j-1];
      leftCounts.set(val, (leftCounts.get(val)||0) + 1);
      rightCounts.set(val, rightCounts.get(val) - 1);
      if (rightCounts.get(val) === 0) rightCounts.delete(val);
    }
    prefixCol += colSum[j-1];
    const sumLeft = prefixCol;
    const sumRight = totalSum - sumLeft;
    if (sumLeft === sumRight) return true;
    const diff = Math.abs(sumLeft - sumRight);
    if (sumLeft > sumRight) {
      // search in left
      const leftCols = j, leftRows = m;
      if (leftRows > 1 && leftCols > 1) {
        if (hasInMap(leftCounts, diff)) return true;
      } else if (leftCols === 1) {
        // left single column at col 0: allowed rows endpoints 0 or m-1
        if (grid[0][0] === diff || grid[m-1][0] === diff) return true;
      } else if (leftRows === 1) {
        // left is single row (m==1) at row 0: endpoints are col 0 or j-1
        if (grid[0][0] === diff || grid[0][j-1] === diff) return true;
      }
    } else {
      // right larger: search in rightCounts
      const rightCols = n - j, rightRows = m;
      if (rightRows > 1 && rightCols > 1) {
        if (hasInMap(rightCounts, diff)) return true;
      } else if (rightCols === 1) {
        // right single column at col j: allowed rows endpoints 0 or m-1
        if (grid[0][j] === diff || grid[m-1][j] === diff) return true;
      } else if (rightRows === 1) {
        // right single row (m==1) at row 0: endpoints are col j or n-1
        if (grid[0][j] === diff || grid[0][n-1] === diff) return true;
      }
    }
  }

  return false;
};