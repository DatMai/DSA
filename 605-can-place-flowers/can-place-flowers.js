/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (flowerbed.length == 1 && flowerbed[0] == 0 && n == 1) return true;
    for (let i = 0; i < flowerbed.length; ++i) {
        let left = i === 0 || flowerbed[i - 1] === 0 ? true : false;
        let right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0 ? true : false;

        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }

    return n <= 0;
};