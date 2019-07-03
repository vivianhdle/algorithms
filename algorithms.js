//will take in two numbers and divide 1st by 2nd number, return the number back as a string with correct comma spaces
function divisionStringified(num1,num2){
    let stringified = (num1/num2).toString();
    let commafied = ''
    if (stringified.length>3){
        for (let strIndex=stringified.length-3;strIndex>0;strIndex-=3){
            commafied += ',' + stringified.substr(strIndex,3);
            if (strIndex-3<=0){
                commafied = stringified.substr(0,strIndex) + commafied;
            }
        }
    } else {
        return stringified;
    }
    return commafied;
}

console.log('divisionStringified(10000000,2) should be 5,000,000 and is',divisionStringified(10000000,2));

//================================================================================================================================
//================================================================================================================================
//takes in a str which will represent two times separated by a hyphen

function countingMinutes(times){
    times = times.split('-'); //['12:30pm','12:00am']
    const startTimes = times[0].substr(0,times[0].length-2).split(':');
    const targetTimes= times[1].substr(0,times[1].length-2).split(':');
    let startHour = parseInt(startTimes[0]);
    let startAbb = times[0].substr(times[0].length-2);
    const targetHour = parseInt(targetTimes[0]);
    let targetAbb = times[1].substr(times[1].length-2);
    let hoursPassed = 0;
    let minutesPassed = -(60-parseInt(startTimes[1]))+ parseInt(targetTimes[1]);
    if (startHour === targetHour && startAbb === targetAbb && parseInt(startTimes[1])>parseInt(targetTimes[1])){
        hoursPassed+=24
        minutesPassed = parseInt(targetTimes[1]) - parseInt(startTimes[1]);
    }
    while (startAbb !== targetAbb || startHour !== targetHour){
        if (startHour === 12){
            startHour = 1;
        } else if (startHour === 11){
            startAbb = toggleAMPM(startAbb);
            startHour++
        } else{
            startHour++
        }
        hoursPassed++
    }
    return hoursPassed*60 + minutesPassed;
}

function toggleAMPM(str){
    if (str === 'am'){
        return 'pm'
    } else {
        return 'am'
    }
}

console.log('countingMinutes("12:30pm-12:00am") should be 690 and is',countingMinutes("12:30pm-12:00am"));
console.log('countingMinutes("1:23am-1:08am") should be 1425 and is',countingMinutes("1:23am-1:08am"));

//================================================================================================================================
//================================================================================================================================

function meanMode(arr){
    //takes in arr of numbers, returns 1 if mode=mean
    //if they dont equal eachother, return 0
    //mean = all the numbers added and divided by length
    // mode = number that occurs the most
    let tracker = {}
    let sum = 0;
    let mode;
    arr.forEach((num,index)=>{
        if (!tracker.hasOwnProperty(num)){
            tracker[num]++
        } else {
            tracker[num] = 0;
            if (!mode){
                mode = num;
            } else if(tracker[num]>tracker[mode]){
                mode=num;
            }
        }
        sum+=num
    })
    return mode === sum/arr.length ? 1:0
}

console.log('meanMode([5, 3, 3, 3, 1]) should return 1 and returns',meanMode([5, 3, 3, 3, 1]));
console.log('meanMode([1, 2, 3]) should return 0 and returns',meanMode([1, 2, 3]));
//================================================================================================================================
//================================================================================================================================

// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 

function dashInsert(str){
    let newStr=''
    for (let strIndex=0;strIndex<str.length;strIndex++){
        let currentNum = parseInt(str[strIndex])
        let nextNum = parseInt(str[strIndex+1])
        if (currentNum%2!==0 && nextNum && nextNum%2!==0){
            newStr += currentNum + '-'
        }else{
            newStr+=currentNum
        }
    }
    return newStr
}

console.log('dashInsert("454793") should return 4547-9-3 and returns', dashInsert("454793"));
//================================================================================================================================
//================================================================================================================================

function secondGreatLow(arr){
    //start at index 1 and see if index 1 is greating than index 0, if not keep checking
    //variable for startInd = 0
    //variable for currentInd =
    //same for the one at the end
    //let results = [];
    //keep running this check until results has 2...
    let startIndex = 0;
    let currentIndex = 1;
    const results = [];
    while (results.length===0){
        if (arr[startIndex]<arr[currentIndex]){
            results.push(arr[currentIndex])
        } else {
            currentIndex++
        }
    }

    startIndex=arr.length-1;
    currentIndex=arr.length-2
    while (results.length===1){
        if (arr[startIndex]>arr[currentIndex]){
            results.push(arr[currentIndex]);
        } else {
            currentIndex--
        }
    }
    return results.join(' ');
}

console.log("secondGreatLow([7, 7, 12, 98, 106]) should return 12 98 and it returnss",secondGreatLow([7, 7, 12, 98, 106]));
console.log("secondGreatLow([12, 98]) should return  98 12 and it returnss",secondGreatLow([12, 98]));
//================================================================================================================================
//================================================================================================================================

function swapCase(str){
    //the letter is lowercase if... it is between a and z unicodes (so we can compare the letter codes)
    let newStr = '';
    for (let strIndex in str){
        if (str[strIndex]>='a' && str[strIndex]<='z'){
            newStr+=str[strIndex].toUpperCase();
        } else {
            newStr+=str[strIndex].toLowerCase();
        }
    }
    return newStr;
}

console.log("swapCase('Sup DUDE!!?') should return sUP dude!!? and returns",swapCase('Sup DUDE!!?'));
console.log("swapCase('Hello-LOL') should return hELLO-lol and returns",swapCase('Hello-LOL'));
//================================================================================================================================
//================================================================================================================================


function numberSearch(str){
    var pattern = /[0-9]+/gm;
    const matches = str.match(pattern);
    return matches.reduce((prev,curr)=>{
        return parseInt(prev)+parseInt(curr);
    });
}
console.log("numberSearch('55Hello') should return 55 and returns",numberSearch('55Hello'));
console.log("numberSearch('88Hello 3World!') should return 91 and returns",numberSearch('88Hello 3World!'));

//================================================================================================================================
//================================================================================================================================

function thirdGreatest(strArr){
    //we need to know the length of all these words, maybe we can use a .sort? 
    //.sort(a,b) --> return if a.length>b.length
    const sortedArr = strArr.sort((a,b)=>{return a.length-b.length});
    if (sortedArr[sortedArr.length-3].length === sortedArr[sortedArr.length-2].length){
        if (sortedArr[sortedArr.length-1].length === sortedArr[sortedArr.length-2].length){
            return sortedArr[sortedArr.length-1];
        }else{
            return sortedArr[sortedArr.length-2];
        }
    } else{
        return sortedArr[sortedArr.length-3];
    }
}

console.log('thirdGreatest(["hello", "world", "before", "all"]) should return "world" and returns', thirdGreatest(["hello", "world", "before", "all"]));
console.log('thirdGreatest(["coder","byte","code"]) should return "code" and returns', thirdGreatest(["coder","byte","code"]));
console.log('thirdGreatest(["abc","defg","z","hijk"]) should return "abc" and returns',thirdGreatest(["abc","defg","z","hijk"]));
//================================================================================================================================
//================================================================================================================================

function powersOfTwo(num){
    //will return true or false if it is a power of 2...
    //it is a power if the square root is a whole number..
    //a number is a whole number/int if it has no decimals praseInt === the normal?
    if (Math.sqrt(num) === parseInt(Math.sqrt(num))){
        return true;
    }else{
        return false;
    }
}
console.log("powersOfTwo(4) should return true and returns",powersOfTwo(4));
console.log("powersOfTwo(124) should return false and returns",powersOfTwo(124));
//================================================================================================================================
//================================================================================================================================

function additivePersistence(num){
    let numbers = num.toString();//2718,
    let answer = 0;
    let counter=0;
    if (num.toString().length===1){
        return 0;
    }
    while (answer.toString().length !== 1 || answer===0){
        answer = 0;
        for (let strIndex in numbers){
            answer += parseInt(numbers[strIndex]);
        }
        numbers=answer.toString();
        counter++
    }
    return counter;
}
console.log("additivePersistence(4) should return 0 and returns",additivePersistence(4));
console.log("additivePersistence(2718) should return 2 and returns",additivePersistence(2718));

//================================================================================================================================
//================================================================================================================================

function multiplicativePersistence(num){
    let stringified = num.toString();
    let multiplied = 1;
    let counter = 0;
    while (stringified.length !== 1){
        for (let numIndex in stringified){
            const currentNumber = parseInt(stringified[numIndex]);
            multiplied *= currentNumber
        }
        stringified = multiplied.toString();
        counter++
        multiplied = 1;
    }
    return counter;
}
console.log("multiplicativePersistence(39) should return 3 and returns",multiplicativePersistence(39));

//================================================================================================================================
//================================================================================================================================

function offLineMinimum(strArr){
    let newArr = [];
    let results = [];
    for (let arrIndex=0;arrIndex<strArr.length;arrIndex++){
        if (!isNaN(strArr[arrIndex])){
            let currentNumber=parseInt(strArr[arrIndex])
            newArr.push(currentNumber);
        } else {
            newArr.sort();
            results.push(newArr.shift());
        }
    }
    return results.join(',');
}

console.log('offLineMinimum(["1","2","E","E","3"]) should return "1,2" and returns',offLineMinimum(["1","2","E","E","3"]));
console.log('offLineMinimum(["4","E","1","E","2","E","3","E"]) should return "4,1,2,3" and returns',offLineMinimum(["4","E","1","E","2","E","3","E"]));

//================================================================================================================================
//================================================================================================================================

function changingSequence(arr){
    let startIndex=0
    if (arr[startIndex]>arr[startIndex+1]){
        while(arr[startIndex]>arr[startIndex+1] && startIndex<arr.length){
            startIndex++;
        }
    } else {
        while(arr[startIndex]<arr[startIndex+1] && startIndex<arr.length){
            startIndex++;
        }
    }
    return startIndex === arr.length-1 ? -1:startIndex;
}

console.log('changingSequence([1, 2, 4, 6, 4, 3, 1]) should return 3 and returns',changingSequence([1, 2, 4, 6, 4, 3, 1]));
console.log('changingSequence([-4, -2, 9, 10]) should return -1 and returns',changingSequence([-4, -2, 9, 10]));
//================================================================================================================================
//================================================================================================================================
function overlappingRanges(arr){
    const range1 = [];
    const range2 = [];
    let counter = 0;
    for (let arrIndex=arr[0];arrIndex<=arr[1];arrIndex++){
        range1.push(arrIndex);
    }
    for (let arrIndex=arr[2];arrIndex<=arr[3];arrIndex++){
        range2.push(arrIndex);
    }
    range2.forEach((number)=>{
        range1.indexOf(number) !== -1 ? counter++:null
    })
    return counter >= arr[4]
}

console.log("overlappingRanges([4, 10, 2, 6, 3]) should return true and returns",overlappingRanges([4, 10, 2, 6, 3]));
console.log("overlappingRanges([1,2,1,3,1]) should return true and returns",overlappingRanges([1,2,1,3,1]));
console.log("overlappingRanges([1,2,1,3,1]) should return true and returns",overlappingRanges([1,2,1,3,1]));

//================================================================================================================================
//================================================================================================================================

function superIncreasing(arr){
    let sum = 0;
    for (let arrIndex=0;arrIndex<arr.length-1;arrIndex++){
        sum += arr[arrIndex];
        if (sum>=arr[arrIndex+1]){
            return false
        }
    }
    return true;
}

console.log('superIncreasing([1, 3, 6, 13, 54]) should return true and returns', superIncreasing([1, 3, 6, 13, 54]));
console.log('superIncreasing([1,2,3,4]) should return false and returns', superIncreasing([1,2,3,4]));

//================================================================================================================================
//================================================================================================================================

function hammingDistance(strArr){
    let counter=0;
    for (let strIndex=0;strIndex<strArr[1].length;strIndex++){
        if (strArr[0][strIndex]!==strArr[1][strIndex]){
            counter++
        }
    }
    return counter;
}
console.log('hammingDistance(["coder", "codec"]) should return 1 and returns',hammingDistance(["coder", "codec"]));
console.log('hammingDistance(["10011", "10100"]) should return 3 and returns',hammingDistance(["10011", "10100"]));

//================================================================================================================================
//================================================================================================================================

function rectangleArea(strArr){
    const pattern = /[0-9]/gmi
    const newArr = strArr.map((item)=>{
        return item.match(pattern);
    })
    const x = [];
    const y = [];
    newArr.forEach((item)=>{
        if (!x.includes(item[0])){
            x.push(item[0]);
        }
        if (!y.includes(item[1])){
            y.push(item[1]);
        }
    })
    if (x.length===0 || y.length===1){
        return 0
    }
    return Math.abs(x[0]-x[1]) * Math.abs(y[0]-y[1]);
}

console.log('rectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"])',rectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"]));
console.log('rectangleArea(["(0 0)","(1 0)","(1 1)","(0 1)"])',rectangleArea(["(0 0)","(1 0)","(1 1)","(0 1)"]));
console.log('rectangleArea(["(0 0)","(0 0)","(0 0)","(0 0)"])',rectangleArea(["(0 0)","(0 0)","(0 0)","(0 0)"]));

//================================================================================================================================
//================================================================================================================================

function otherProducts(arr){
    let currentIndex=0;
    let result = [];
    while (result.length !== arr.length){
        let product = 1;
        arr.forEach((number,index)=>{
            if (currentIndex!==index){
                product*=number;
            }
        })
        result.push(product);
        currentIndex++
    }
    return result.join('-');
}

console.log('otherProducts([1, 2, 3, 4, 5]) should return 120-60-40-30-24 and returns',otherProducts([1, 2, 3, 4, 5]));
console.log('otherProducts([1,4,3]) should return 12-3-4 and returns',otherProducts([1,4,3]));
console.log('otherProducts([3,1,2,6]) should return 12-36-18-6 and returns',otherProducts([3,1,2,6]));
//================================================================================================================================
//================================================================================================================================


function arrayMatching(strArr){
    let arrArray = [];
    let results = [];
    for (let arrIndex=0;arrIndex<strArr.length;arrIndex++){
        arrArray.push(JSON.parse(strArr[arrIndex]));
    }
    let longerArray = arrArray[0].length > arrArray[1].length ? 0:1;
    for (let arrIndex=0;arrIndex<arrArray[longerArray].length;arrIndex++){
        const firstArrVal = arrArray[0][arrIndex];
        const secondArrVal = arrArray[1][arrIndex];
        if (firstArrVal && secondArrVal){
            results.push(firstArrVal + secondArrVal)
        } else {
            results.push(arrArray[longerArray][arrIndex])
        }
    }
    return results.join('-');
}

console.log('arrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]) should return 6-4-13-17 and returns', arrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]));
console.log('arrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]) should return 7-4-5-10-6 and returns', arrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]));



//================================================================================================================================
//================================================================================================================================

function longestIncreasing(arr){
    let results = [arr[0]];
    for (let index=1;index<arr.length;index++){
        if (arr[index]>results[results.length-1]){
            results.push(arr[index]);
        }
        for (let secIndex=0;secIndex<arr.length;secIndex++){
            if (results[secIndex]>=arr[index]){
                results[secIndex] = arr[index];
                break;
            }
        }
        
    }
    return results.length;
}

console.log('longestIncreasing([9,9,4,2]) should return 1 and returns',longestIncreasing([9,9,4,2]));
console.log('longestIncreasing([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]) should return 7 and returns',longestIncreasing([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]));
console.log('longestIncreasing([1, 2, 3, 7, 4, 5]) should return 5 and returns',longestIncreasing([1, 2, 3, 7, 4, 5]));
console.log('longestIncreasing([4, 3, 5, 1, 6] ) should return 5 and returns',longestIncreasing([4, 3, 5, 1, 6]));

//================================================================================================================================
//================================================================================================================================

function evenPairs(str){
    const pattern = /[0-9]+/gmi;
    const numbers = str.match(pattern)
    if (numbers === null){
        return false;
    }
    for (let numIndex=0;numIndex<numbers.length;numIndex++){
        const num1 = numbers[numIndex].slice(0,1);
        const num2 = numbers[numIndex].slice(1);
        if (num1 && num2 && num1%2 === 0 && num2%2 === 0){
            return true
        }
    }
    return false;
}

console.log("evenPairs('7r5gg812') should return true and returns", evenPairs('7r5gg812'));
console.log("evenPairs('f178svg3k19k46') should return true and returns", evenPairs('f178svg3k19k46'));
console.log("evenPairs('f09r27i8e67') should return true and returns", evenPairs('f09r27i8e67'));
console.log("evenPairs('abc') should return true and returns", evenPairs('abc'));

















