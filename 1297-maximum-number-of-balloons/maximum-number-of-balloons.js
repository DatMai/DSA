const maxNumberOfBalloons = text => {
    const f = [0, 0, 0, 0, 0];
    for (const ch of text)
        f[`balon`.indexOf(ch)]++;

    return Math.min(f[0], f[1], f[2] >> 1, f[3] >> 1, f[4]);
};