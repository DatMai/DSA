function largestSquareArea(
    bottomLeft: number[][],
    topRight: number[][],
): number {
    const n = bottomLeft.length;
    let maxSide = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const w =
                Math.min(topRight[i][0], topRight[j][0]) -
                Math.max(bottomLeft[i][0], bottomLeft[j][0]);
            const h =
                Math.min(topRight[i][1], topRight[j][1]) -
                Math.max(bottomLeft[i][1], bottomLeft[j][1]);

            maxSide = Math.max(maxSide, Math.min(w, h));
        }
    }

    return maxSide * maxSide;
}