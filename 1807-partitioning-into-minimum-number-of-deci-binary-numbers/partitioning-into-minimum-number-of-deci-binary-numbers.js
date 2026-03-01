const minPartitions = (n) =>
    n.split('').reduce((r, d) => Math.max(r, +d), 0);