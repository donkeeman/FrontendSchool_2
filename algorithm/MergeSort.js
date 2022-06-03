function mergeSort(arr){
    let result = [];

    if (arr.length <= 1) {
        return arr;
    }

    let mid = parseInt(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    while (left.length != 0 && right.length != 0){
        if (left[0] < right[0]){
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }

    while (left.length != 0){
        result.push(left.shift());
    }

    while (right.length != 0){
        result.push(right.shift());
    }

    return result;
}