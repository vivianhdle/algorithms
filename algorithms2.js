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
console.log('plusOne([9,9,9])=[1,0,0,0] and returns',plusOne([9,9,9]));
console.log('plusOne([8,9,9])=[9,0,0] and returns',plusOne([8,9,9]));
//=========================================================================================================================
//=========================================================================================================================
function fibonacciSequence(num){
    const fib = [0,1];
    for (let index=fib.length-1;index<=num;index++){
        const lastNum = fib[index];
        const prevNum = fib[index-1];
        fib.push(lastNum+prevNum);
    }
    return fib[num];
}
console.log('fibonacciSequence(4)=3 and returns',fibonacciSequence(4));
console.log('fibonacciSequence(5)=5 and returns',fibonacciSequence(5));
console.log('fibonacciSequence(10)=55 and returns',fibonacciSequence(10));
//=========================================================================================================================
//=========================================================================================================================
function removeVowels(str){
    return str.replace(/[aeiou]/gmi,'');
}
console.log("removeVowels('Hey how are you')='Hy hw r y' and returns",removeVowels('Hey how are you'));
//=========================================================================================================================
//=========================================================================================================================
//implement factorial with recursion
function factorial(num){
    if (num>1){
        return num*factorial(--num);
    } else {
        return 1;
    }
}
console.log('factorial(6)=720 and returns',factorial(6));

//=========================================================================================================================
//=========================================================================================================================

function searchInsert(arr,target){
    if (arr.includes(target)){
        return arr.indexOf(target);
    } else {
        for (let arrInd=0;arrInd<arr.length;arrInd++){
            const currentNum = arr[arrInd];
            if (target<currentNum){
                return arrInd;
            }
        }
        return arr.length;
    }
}
console.log('searchInsert([1,3,5,6],5)=2 and returns',searchInsert([1,3,5,6],5));
console.log('searchInsert([1,3,5,6],2)=1 and returns',searchInsert([1,3,5,6],2));
console.log('searchInsert([1,3,5,6],7)=4 and returns',searchInsert([1,3,5,6],7));

//=========================================================================================================================
//=========================================================================================================================


function maxSubArray(arr){
    if (arr.length === 1 ){return arr}
    const subarray = [arr.shift()];
    let max = arr.reduce((currentMax,currentValue,index)=>{
        if (currentValue + subarray[index] > currentValue){
            subarray[index+1] = currentValue + subarray[index];
        } else {
            subarray[index+1] = currentValue;
        }
        return subarray[index+1] > currentMax ? subarray[index+1] : currentMax;
    },subarray[0]);
    return max;
}

console.log('maxSubArray([[-2,1,-3,4,-1,2,1,-5,4]])=6 and returns',maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

//=========================================================================================================================
//=========================================================================================================================

function plus1(arr){
    let lastIndex=arr.length-1;
    while (arr[lastIndex] === 9 && lastIndex!==0){
        arr[lastIndex] = 0
        lastIndex--
    }
    if (arr[lastIndex] === 9){
        arr[lastIndex] = 0
        arr.unshift(1);
    } else {
        arr[lastIndex]++;
    }
    return arr;
}

console.log('plus1([9,9])=[1,0,0] and returns',plus1([9,9]));

//=========================================================================================================================
//=========================================================================================================================

function climbingStairs(steps){
    let pattern = [0,1,2];
    for (let start=pattern.length-1;start<steps;start++){
        pattern.push(pattern[start]+pattern[start-1])
    }
    return pattern[steps];
}
console.log('climbingStairs(4)=5 and returns',climbingStairs(4));
console.log('climbingStairs(7)=21 and returns',climbingStairs(7));
console.log('climbingStairs(7)=21 and returns',climbingStairs(10));

//=========================================================================================================================
//=========================================================================================================================

function removeAllDuplicates(head){
    if (!head){
        return null;
    }
    if (!head.next){
        return head;
    }
    const runner = head.next;
    let count = 0;
    while(runner && runner.val === head.val){
        runner = runner.next;
        count ++
    }
    const post = removeAllDuplicates(runner);
    if (count>0){
        return post;
    }
    return head;
}
