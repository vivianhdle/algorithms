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



// Have the function ChangingSequence(arr) take the array of numbers stored in arr and return the index at which the numbers stop increasing and begin decreasing or stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the array where the numbers were increasing and the next number begins a decreasing sequence. The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0. 

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








































