var concatenatedBinary = function(n) {
    const MOD = 1000000007n;
    let res = 0n;
    let bits = 0n;

    for(let i=1n; i<=BigInt(n); i++){
        if((i & (i-1n)) === 0n) bits++;
        res = ((res<<bits) | i) % MOD;
    }

    return Number(res);
};