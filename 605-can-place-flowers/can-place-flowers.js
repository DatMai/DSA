/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; ++i) {
        if (flowerbed[i] == 0
            && (flowerbed[i - 1] == 0 || flowerbed[i - 1] == null)
            && (flowerbed[i + 1] == 0 || flowerbed[i + 1] == null)) {
            count++;
            i = i + 1;
        }
    }
    return n <= count;
};