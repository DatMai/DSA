var lexGreaterPermutation = function (s, target) {
    const cnt = new Array(26).fill(0);
    for (const c of s) {
        cnt[c.charCodeAt(0) - 97]++;
    }

    let res = "";
    const n = target.length;

    for (let i = 0; i < n; i++) {
        const targetChar = target.charCodeAt(i) - 97;

        // Case 1: First try to place the same character as target[i] at the current position
        if (cnt[targetChar] > 0) {
            cnt[targetChar]--;
            // Check if the remaining characters can form a string greater than target[i+1:]
            if (canFormGreater(cnt, target, i + 1)) {
                res += target[i];
                continue;
            }
            // Cannot form a larger string, backtrack
            cnt[targetChar]++;
        }

        // Case 2: Place a character greater than target[i] at the current position
        for (let j = targetChar + 1; j < 26; j++) {
            if (cnt[j] > 0) {
                cnt[j]--;
                res += String.fromCharCode(97 + j);
                // Fill remaining positions with the smallest lexicographical order
                res += getMinString(cnt);
                return res;
            }
        }

        // No feasible solution found, return directly
        return "";
    }

    return "";
};

// Check if the remaining characters can form a string greater than the suffix.
function canFormGreater(cnt, target, start) {
    const maxStr = getMaxString(cnt);
    const suffix = target.substring(start);
    return maxStr > suffix;
}

// Get the maximum lexicographical string (in descending order)
function getMaxString(cnt) {
    let res = "";
    for (let i = 25; i >= 0; i--) {
        res += String.fromCharCode(97 + i).repeat(cnt[i]);
    }
    return res;
}

// Get the lexicographically smallest string (in ascending order)
function getMinString(cnt) {
    let res = "";
    for (let i = 0; i < 26; i++) {
        res += String.fromCharCode(97 + i).repeat(cnt[i]);
    }
    return res;
}