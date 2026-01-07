var maxProduct = function(root) {
    const MOD = 1000000007;
    let total = 0, best = 0;

    const sum = (node) => {
        if (!node) return 0;
        return node.val + sum(node.left) + sum(node.right);
    };

    total = sum(root);

    const dfs = (node) => {
        if (!node) return 0;
        const s = node.val + dfs(node.left) + dfs(node.right);
        best = Math.max(best, s * (total - s));
        return s;
    };

    dfs(root);
    return best % MOD;
};