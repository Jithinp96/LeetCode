/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let x= new Set(nums)
    let count = 0;
    for(a of x) {
        if(a>0) {
            count++
        }
    }
    return count
};