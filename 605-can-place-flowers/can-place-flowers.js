/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (flowerbed.length == 1 && flowerbed[0] == 0) return true;
    for (let i = 0; i < flowerbed.length; ++i) {
        if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) { flowerbed[i] = 1; n--; }
        if (i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) { flowerbed[i] = 1; n--; }
        if (i != 0 && i != flowerbed.length && flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }

    return n <= 0;
};