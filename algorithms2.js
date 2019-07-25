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

//=========================================================================================================================
//=========================================================================================================================


function isSameTree(tree1,tree2){
    if (tree1== null && tree2 == null){return true};
    if (tree1 == null || tree2 == null){return false};
    if (tree1.val === tree2.val){
        return isSameTree(tree1.left,tree2.left) && isSameTree(tree1.right,tree2.right)
    } else {
        return false
    }
    return true
}

//=========================================================================================================================
//=========================================================================================================================

//takes in a non-empty array of integers and every element appears twice accept for one, find that single one.
function singleNumber(arr){
    let current = arr.shift();
    while(arr.length>0){
        if (arr.includes(current)){
            arr.splice(arr.indexOf(current),1);
            current=arr.shift();
        }else{
            return current;
        }
    }
    return current;
}

console.log('singleNumber([1,1,2,5,5])=2 and returns',singleNumber([1,1,2,5,5]));
console.log('singleNumber([2,2,7,7,10])=10 and returns',singleNumber([2,2,7,7,10]));
console.log('singleNumber([3,2,5,2,5])=3 and returns',singleNumber([3,2,5,2,5]));

//=========================================================================================================================
//=========================================================================================================================

//takes in a str and reverses all the vowels
function reverseVowels(str){
    const pattern = /[aeiou]/gmi;
    const foundVowels = str.match(pattern);
    return str.replace(pattern,()=>{return foundVowels.pop()});
}

console.log('reverseVowels("hello")=holle and returns',reverseVowels("hello"));
console.log('reverseVowels("josh billy")=jish bolly and returns',reverseVowels("josh billy"));

//=========================================================================================================================
//=========================================================================================================================

//takes in a number, determine if the number is happy
//a happy number will keep repeating and squaring the digits until it equals 1;
function happyNumber(num){
    num = num.toString();
    const seen = {};
    while (true) {
        let sum = 0;
        for (let numIndex in num){
            const currentNumber = num[numIndex]
            sum+=currentNumber*currentNumber;
        }
        if (seen[sum]){
            return false;
        } else {
            seen[sum] = null ;
        }
        if (sum===1){
            return true
        } else {
            num = sum.toString();
        }
    }
}

console.log('happyNumber(19)=true and returns',happyNumber(19));

//=========================================================================================================================
//=========================================================================================================================

//repeatedly add digits until digits has 1 number;

function addDigits(num){
    num=num.toString();
    while(num.length>1){
        let sum = 0;
        for (let numIndex in num){
            const currentNum = parseInt(num[numIndex]);
            sum+=currentNum;
        }
        num=sum.toString();
    }
    return num
}

console.log('addDigits(38)=2 and returns',addDigits(38));

//=========================================================================================================================
//=========================================================================================================================
//given an array, you can only rob houses non-adjacent to eachother, figure out which path is more lucrative
function rob(arr){
    let dp = [arr[0],Math.max(arr[0],arr[1])];
    for (let ind=2;ind<arr.length;ind++){
        dp[ind] = Math.max((dp[ind-2]+arr[ind]),dp[ind-1]);
    }
    return dp[dp.length-1];
}
console.log('rob([1,2,3,1])=4 and returns',rob([1,2,3,1]));
console.log('rob([2,7,9,3,1])=12 and returns',rob([2,7,9,3,1]));
console.log('rob([9,7,9,15,1])=24 and returns',rob([9,7,9,15,1]));
//=========================================================================================================================
//=========================================================================================================================

//takes in an array of numbers and determines if there are duplicates in the array
function containsDuplicates(arr){
    let map = {};
    for (let arrIndex in arr){
        const currentNum = arr[arrIndex];
        if (map.hasOwnProperty(currentNum)){
            return true
        } else {
            map[currentNum]=null
        }
    }
    return false;
}

console.log('containsDuplicates([1,2,3,1])=true and returns',containsDuplicates([1,2,3,1]));
console.log('containsDuplicates([1,2,3,4])=false and returns',containsDuplicates([1,2,3,4]));