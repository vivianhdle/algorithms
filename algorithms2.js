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

//=========================================================================================================================
//=========================================================================================================================

//takes in an array of numbers, finds the duplicate's index and subtracts them and makes sure they're less than k
function containsNearbyDuplicate(arr,max){
    let answer=false;
    let map = {};
    for (let arrIndex in arr){
        const currentNumber = arr[arrIndex];
        if (map.hasOwnProperty(currentNumber)){
            if (Math.abs(parseInt(map[currentNumber]) - parseInt(arrIndex)) <= max){
                answer = true
            } else {
                map[currentNumber] = arrIndex;
            }
        } else {
            map[currentNumber]=arrIndex
        }
    }
    return answer;
}

console.log('containsNearbyDuplicate([1,2,3,1],3)=true and returns',containsNearbyDuplicate([1,2,3,1],3));
console.log('containsNearbyDuplicate([1,0,1,1],1)=true and returns',containsNearbyDuplicate([1,0,1,1],1));
console.log('containsNearbyDuplicate([1,2,3,1,2,3],2)=false and returns',containsNearbyDuplicate([1,2,3,1,2,3],2));

//=========================================================================================================================
//=========================================================================================================================


var reverseWords = function(s) {
    const strSplit = s.split(' ');
    let answer = strSplit.map((item)=>{
        let newStr = '';
        for (let i=item.length-1;i>=0;i--){
            newStr+= item[i];
        }
        return newStr
    })    
    return answer.join(' ');
}

//=========================================================================================================================
//=========================================================================================================================

function missingNumber(arr){
    if (arr.length === 1){
        if (arr.includes(0)){
            return 1
        } else {
            return 0
        }
    }
    for (let arrIndex=0; arrIndex<arr.length; arrIndex++){
        if (!arr.includes(arrIndex)){
            return arrIndex
        }
    }
    return arr.length;
}

//=========================================================================================================================
//=========================================================================================================================

function maxProductSubArray(arr){
    const dp = [arr.shift()];
    const answer = arr.reduce((currentMax,num,index)=>{
        if (dp[index]*arr[index]>dp[index]){
            dp.push(dp[index]*arr[index]);
        } else {
            dp.push(arr[index])
        }
        return currentMax > dp[index+1] ? currentMax : dp[index+1];
    },dp[0])
    return answer;
}

console.log('maxProductSubArray([2,3,-2,4])=6 and returns',maxProductSubArray([2,3,-2,4]));
console.log('maxProductSubArray([-2,0,-1])=0 and returns',maxProductSubArray([-2,0,-1]));

//=========================================================================================================================
//=========================================================================================================================

function robber(arr){
    if (arr.length===0){
        return 0;
    }
    const dp = [arr.shift()];
    if (arr.length===0){
        return dp[0];
    }
    dp.push(Math.max(dp[0],arr.shift()));
    arr.forEach((currentVal,index)=>{
        if (arr[index]+dp[index]>dp[index+1]){
            dp.push(arr[index]+dp[index]);
        } else {
            dp.push(dp[index+1]);
        }
    });
    return dp[dp.length-1];
}

console.log('robber([1,2,3,1])=4 and returns', robber([1,2,3,1]));
console.log('robber([2,7,9,3,1])=12 and returns', robber([2,7,9,3,1]));

//=========================================================================================================================
//=========================================================================================================================

function powerOfTwo(num){
    let inc = 1 ;
    while (true){
        if (inc<num){
            inc*=2;
        } else if(int>num){
            return false;
        } else{
            return true;
        }
    }
}

//=========================================================================================================================
//=========================================================================================================================


function validAnagram(str1,str2){
    if (str1.length !== str2.length){
        return false;
    }
    for (let strIndex=0; strIndex<str2.length; strIndex++){
        let currentLetter = str2[strIndex];
        if (str1.includes(str2[strIndex])){
            str1 = str1.substr(0,str1.indexOf(currentLetter))+str1.substr(str1.indexOf(currentLetter)+1);
        }
    }
    return str1 ? false:true;
}

console.log("validAnagram('rat','car')=false and returns",validAnagram('rat','car'));
console.log("validAnagram('anagram','nagaram')=true and returns",validAnagram('anagram','nagaram'));

//=========================================================================================================================
//=========================================================================================================================

var moveZeroes = function(nums) {
    let checked = 0;
    for ( let numInd=0; numInd<nums.length;numInd++){
        let currentNum = nums[numInd];
        if (currentNum === 0){
            nums.push(nums.splice(numInd,1)[0]);
            numInd--;
        }
        checked++
        if (checked === nums.length){
            return nums;
        }
    }
};

console.log('moveZeros([0,1,0,3,12]) = [1,3,12,0,0] and returns',moveZeroes([0,1,0,3,12]));

//=========================================================================================================================
//=========================================================================================================================

function wordPattern(pattern,str){
    let map = {
        
    }
    let wordMap = {

    }
    const splitWords = str.split(' ');
    if (splitWords.length!==pattern.length){
        return false;
    }
    for (let arrInd = 0; arrInd < splitWords.length; arrInd++){
        const currentWord = splitWords[arrInd];
        const currentLetter = pattern[arrInd];
        if (!map.hasOwnProperty(currentLetter) && !wordMap.hasOwnProperty(currentWord)){
            map[currentLetter] = currentWord;
            wordMap[currentWord] = null;
        } 
        if (map[currentLetter] !== currentWord){
            return false;
        }
    }
    return true;
}

console.log('wordPattern("abba","dog cat cat fish")= false and returns',wordPattern("abba","dog cat cat fish"));
console.log('wordPattern("abba","dog dog dog dog") = false and returns',wordPattern("abba","dog dog dog dog"));
console.log('wordPattern("abba","dog cat cat dog") = true and returns',wordPattern("abba","dog cat cat dog"));
console.log('wordPattern("abba","dog cat cat dog") = true and returns',wordPattern("jquery","jquery"));