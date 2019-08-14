var isPowerOfThree = function(n) {
    while (n>1) {
        n /= 3
    }
    return n === 1 
};

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