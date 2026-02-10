/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let avaiSlot = 0;
    for (let i = 0; i < flowerbed.length; ++i) {
        if (flowerbed[i] == 0 && (flowerbed[i + 1] == 0 || flowerbed[i + 1] == null) && (flowerbed[i - 1] == 0 || flowerbed[i - 1] == null)) {
            flowerbed[i] = 1;
            avaiSlot++;
        }
    }
    console.log('checking avaiSlot', flowerbed, avaiSlot)
    return avaiSlot >= n;
};