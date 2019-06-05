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
        debugger;
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

console.log('dashInsert("454793") should return 4547-9-3 and r', dashInsert("454793"));
