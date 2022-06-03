function findIndex(sortedArr, value) {
    for(let i in sortedArr){
        if(value < sortedArr[i]){
            return i;
        }
    }
    return sortedArr.length;
}

function insertionSort(arr) {
    let sortedArr = [];
    while (arr.length != 0){
        let [value, ...arr2] = arr;
        arr = arr2;
        let index = findIndex(sortedArr, value);
        sortedArr.splice(index, 0, value);
    }
    return sortedArr;
}