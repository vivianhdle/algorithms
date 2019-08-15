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