var test = [1,3,4,6,7,8,10,13];


function mergeSort(arr){
    if (arr.length<=1){
        return arr;
    }
    let middleIndex = Math.floor(arr.length/2);
    const splitLeft = mergeSort(arr.slice(0,middleIndex));
    const splitRight = mergeSort(arr.slice(middleIndex));
    const newArr = [];
    while (splitLeft.length>0||splitRight.length>0){
        if (splitLeft[0]>splitRight[0] || splitLeft.length === 0){
            newArr.push(splitRight.shift());
        } else {
            newArr.push(splitLeft.shift());
        }
    }
    return newArr;
}

console.log(mergeSort(test));