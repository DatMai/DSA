var canConstruct = function(ransomNote, magazine) {
    const map = {};
    
    for (const c of magazine) {
        map[c] = (map[c] || 0) + 1;
    }

    for (const c of ransomNote) {
        if (!map[c]) return false;
        map[c]--;
    }

    return true;
};
