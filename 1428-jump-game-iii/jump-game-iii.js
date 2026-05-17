var canReach = function(arr, start) {
    let n = arr.length,
        curr = [start],
        used = new Set(), next
    while (curr.length) {
        next = []
        for (c of curr) {
            if (arr[c] == 0)
                return true
            used.add(c)
            i = c - arr[c]
            if (i >= 0 && !used.has(i))
                next.push(i)
            i = c + arr[c]
            if (i < n && !used.has(i))
                next.push(i)
        }
        curr = next
    }
    return false
};