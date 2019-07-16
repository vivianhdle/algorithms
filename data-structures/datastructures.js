//MERGE SORT

function mergeSort(arr){
    if (arr.length<=1){
        return arr
    }
    const middle = Math.floor(arr.length/2);
    const splitL = mergeSort(arr.slice(0,middle));
    const splitR = mergeSort(arr.slice(middle));
    const newArr=[];
    while (splitL.length>0 || splitR.length>0){
        if(splitL[0]>splitR[0] || splitL.length===0){
            newArr.push(splitR[0]);
            splitR.shift();
        } else {
            newArr.push(splitL[0]);
            splitL.shift();
        }
    }
    return newArr;
}
console.log(mergeSort([3,6,2,9,1]));