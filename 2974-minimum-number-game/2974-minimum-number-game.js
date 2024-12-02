/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a,b) => a-b)
    for (let j=0; j<nums.length; j=j+2) {
        let a = nums[j]
        nums[j] = nums[j+1]
        nums[j+1] = a
    }
    return nums
};