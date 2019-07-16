//function that will take in an array of numbers
//increment that number as a whole by 1

function plusOne(arr){
    //check the last number of the array and see if it is 9
    //if it is not 9, increment and return the array
    //if it is 9, turn every index that is 9 to 0 until it is not 9 and increment by 1
    let lastIndex = arr.length-1;
    while(arr[lastIndex] === 9 && lastIndex !== 0){
        arr[lastIndex] = 0;
        lastIndex--
    }
    if (lastIndex===0 && arr[lastIndex] === 9){
        arr[lastIndex] = 0;
        arr.unshift(1);
    } else {
        arr[lastIndex]++;
    }
    return arr;
}

console.log('plusOne([1,2,3])=[1,2,4] and returns',plusOne([1,2,3]));
console.log('plusOne([1,2,9])=[1,3,0] and returns',plusOne([1,2,9]));
console.log('plusOne([1,2,9])=[1,3,0] and returns',plusOne([9,9,9]));
console.log('plusOne([1,2,9])=[1,3,0] and returns',plusOne([8,9,9]));