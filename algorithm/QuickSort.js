function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = [입력배열.shift()];
    const left = [];
    const right = [];

    for (let i in arr) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}