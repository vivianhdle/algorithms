var test = [1,3,4,6,7,8,10,13];
var test1 = [4,3,4,6,3,8,8,14,13];
var test2 = [25,3,14,6,7,8,5,13,23];


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
console.log(mergeSort(test1));
console.log(mergeSort(test2));