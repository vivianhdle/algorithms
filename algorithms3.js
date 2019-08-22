var isPowerOfThree = function(n) {
    while (n>1) {
        n /= 3
    }
    return n === 1 
};

//=========================================================================================================================
//=========================================================================================================================


var intersect = function(nums1, nums2) {
    const map = {};
    const answer = [];
    for (let value of nums1){
        map.hasOwnProperty(value) ? map[value]++:map[value]=1;
    }
    for (let value of nums2){
        if (map[value]){
            map[value]--
            answer.push(value);
        }
    }
    return answer
};

//=========================================================================================================================
//=========================================================================================================================

function firstUniqChar(s){
    for (let strInd=0; strInd < s.length; strInd++){
        const currentLetter = s[strInd];
        const pattern = new RegExp(currentLetter,'gmi');
        const found = s.match(pattern);
        if (found.length===1){
            return s.indexOf(currentLetter);
        }
    }
    return -1;
}

console.log('firstUniqChar("leetcode")=0 and returns',firstUniqChar("leetcode"));
console.log('firstUniqChar("loveleetcode")=2 and returns',firstUniqChar("loveleetcode"));

//=========================================================================================================================
//=========================================================================================================================

var isSubsequence = function(s, t) {
    for (let strInd=0; strInd < t.length; strInd++){
        let currentLetter = t[strInd];
        if (s[0] === currentLetter){
            s = s.substr(1);
        }
    }
    return s === ''
};

//=========================================================================================================================
//=========================================================================================================================
//function will remove duplicates in strings and will output the final str

var removeDuplicates = function(s) {
    for (let strInd=0;strInd<s.length;strInd++){
        let currentLetter = s[strInd];
        if (currentletter === s[strInd+1]){
            s = s.substr(0,strInd) + s.substr(strInd+2);
        }
    }
};

//=========================================================================================================================
//=========================================================================================================================
//find the level with the most children
class Node {
    constructor(value,children){
        this.value = value;
        this.children = children;
    }
}
function maxLevelOfNodes(root){
    debugger;
    let maxLevel = 1;
    let currentLevel = [root];
    let max = 1;
    let currentLevelNumber = 1;

    while( currentLevel.length > 0 ){
        currentLevelNumber++
        let nextLevel = [];
        let totalChildren = 0;
        currentLevel.forEach(function (current,index){
            if (current.children){
                nextLevel = nextLevel.concat(current.children);
                totalChildren += current.children.length;
            }
        })
        if (totalChildren > max){
            max = totalChildren;
            maxLevel = currentLevelNumber;
        }
        currentLevel = nextLevel;
    }

    return maxLevel;
}
//=========================================================================================================================
//=========================================================================================================================
//Get rid of duplicate objects in an array
const test = new Node(1,[new Node(2,[new Node(4),new Node(5),new Node(6)]),new Node(3)]);
console.log(test);
console.log(maxLevelOfNodes(test));

const map = {};

const duplicateTest = [{place:"New-York"},{place:'New-York'},{place:"New-Hork"}]

duplicateTest.forEach((item)=>{
    map[JSON.stringify(item)] = true;
});
for (keys in map){
    console.log(JSON.stringify(keys));
}
//=========================================================================================================================
//=========================================================================================================================
//function will return the first unique character's index if there is a unique character else will return -1
var firstUniqChar = function(s) {
    let recordStr = '';
    for (let strInd=0; strInd < s.length; strInd++){
        const currentLetter = s[strInd];
        if (s.indexOf(currentLetter,strInd+1) === -1 && recordStr.indexOf(currentLetter) === -1){
            return strInd
        }
        recordStr += currentLetter;
    }
    return -1; 
};

//=========================================================================================================================
//=========================================================================================================================
//function will find the longest possible palindrome possible
var longestPalindrome = function(str) {
    const map = {};
    let count = 0;
    let odd = false;
    for (let strInd=0;strInd<str.length;strInd++){
        let currentLetter = str[strInd];
        if (map.hasOwnProperty(currentLetter)){
            map[currentLetter]++
        } else {
            map[currentLetter] = 1;
        }
    }
    for (let key in map){
        if (map[key]%2 ===0){
            count += map[key];
        } else if(map[key]>2){
            count += map[key]-1
            if (!odd){
                count++
                odd=true;
            }
        } else if (!odd){
            count++
            odd=true;
        }
    }
    return count;
};