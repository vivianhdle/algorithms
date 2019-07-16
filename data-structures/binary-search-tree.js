//binary search trees take in an array and orders them in a divide and conquer type of way
var test = [1,3,4,6,7,8,10,13];

function populateBST(arr){
    const middleIndex = Math.floor(arr.length/2);
    const node = {
        value:arr[middleIndex],
        left:null,
        right:null
    }
    if (arr.length>1){
        node.left = populateBST(arr.slice(0,middleIndex));
        node.right = populateBST(arr.slice(middleIndex+1));
    }
    return node;
}

console.log(populateBST(test));