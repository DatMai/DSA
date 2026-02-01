function quickSort(arr: number[], l: number, r: number) {
    if (l >= r) return;
    const pivot = arr[(l + r) >> 1];
    let i = l, j = r;

    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++; j--;
        }
    }

    quickSort(arr, l, j);
    quickSort(arr, i, r);
}

function minimumCost(nums: number[]): number {
    quickSort(nums, 1, nums.length - 1);
    return nums[0] + nums[1] + nums[2];
}
