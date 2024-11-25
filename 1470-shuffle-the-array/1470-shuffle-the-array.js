/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let x =[]
    for(i=0;i<n;i++){
        x.push(nums[i],nums[i+n])
    }
    return x;
};