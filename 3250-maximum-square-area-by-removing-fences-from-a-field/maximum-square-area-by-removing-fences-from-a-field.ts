function maximizeSquareArea(
    m: number,
    n: number,
    hFences: number[],
    vFences: number[],
): number {
    const MOD = 1000000007;

    const getEdges = (fences: number[], border: number): Set<number> => {
        const set = new Set<number>();
        const list = [...fences];

        list.push(1);
        list.push(border);
        list.sort((a, b) => a - b);

        for (let i = 0; i < list.length; i++) {
            for (let j = i + 1; j < list.length; j++) {
                set.add(list[j] - list[i]);
            }
        }

        return set;
    };

    const hEdges = getEdges(hFences, m);
    const vEdges = getEdges(vFences, n);

    let res = 0;
    for (const e of hEdges) {
        if (vEdges.has(e)) {
            res = Math.max(res, e);
        }
    }

    if (res === 0) {
        return -1;
    }

    return Number((BigInt(res) * BigInt(res)) % BigInt(MOD));
}