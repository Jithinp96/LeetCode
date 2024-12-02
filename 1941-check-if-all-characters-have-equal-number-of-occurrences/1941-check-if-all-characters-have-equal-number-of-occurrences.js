/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let count;
    let arr = [];
    for(let i=0; i<s.length; i++) {
        count=0;
        for(let j=0; j<s.length; j++) {
            if(s[i]===s[j]) {
                if (j<i) {
                    break;
                }
                count ++
            }
        }
        if(count !=0) {
            arr.push(count)
        }
    }
    for (let i=0; i<arr.length-1; i++) {
        if(arr[i] !== arr[i+1]){
            return false
        }
    }
    return true
};