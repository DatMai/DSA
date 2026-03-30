/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length; ++i) {
        if (flowerbed[i] === 0) {
            let left = i === 0 || flowerbed[i - 1] === 0;
            let right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

            if (left && right && flowerbed[i] === 0) {
                flowerbed[i] = 1;
                n--;
            }
        }
    }
    if (flowerbed.length === 1 && flowerbed[0] === 0) return true;

    return n <= 0;
};