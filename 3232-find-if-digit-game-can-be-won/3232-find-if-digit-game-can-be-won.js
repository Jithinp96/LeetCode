/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singleSum=0
    let doubleSum=0
    for(i=0; i<nums.length; i++) {
        if(nums[i]<=9) {
            singleSum += nums[i]
        } else {
            doubleSum += nums[i]
        }
    }
    if(doubleSum === singleSum) {
        return false
    } else {
        return true
    }
};