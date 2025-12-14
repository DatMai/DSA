var numberOfWays = function(corridor) {
    // Store 1000000007 in a variable for convenience
    const MOD = 1e9 + 7;

    // Total number of ways
    let count = 1;

    // Number of seats in the current section
    let seats = 0;

    // Tracking Index of last S in the previous section
    let previousPairLast = -1;

    // Keep track of seats in corridor
    for (let index = 0; index < corridor.length; index++) {
        if (corridor[index] == 'S') {
            seats += 1;

            // If two seats, then this is the last S in the section
            // Update seats for the next section
            if (seats == 2) {
                previousPairLast = index;
                seats = 0;
            }

            // If one seat, then this is the first S in the section
            // Compute product of non-paired neighbors
            else if (seats == 1 && previousPairLast != -1) {
                count *= (index - previousPairLast);
                count %= MOD;
            }
        }
    }

    // If odd seats, or zero seats
    if (seats == 1 || previousPairLast == -1) {
        return 0;
    }

    // Return the number of ways
    return count;
};