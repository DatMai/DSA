var smallestPalindrome = function (s) {
    const partition = Math.floor(s.length / 2);

    const base = s.substring(0, partition).split("").toSorted();
    const mid = s.length % 2 === 1 ? s[partition] : "";
    const reversed = base.toReversed();

    return base.join("") + mid + reversed.join("");
};