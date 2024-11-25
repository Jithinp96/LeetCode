/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let preSum = [];
    preSum.push(nums[0]);
    let n = nums.length;
    let ans = nums[0];
    if(n === 1){ return ans >= 0 ? 1 : ((ans*-1)+1)}
    
    for(let i = 1; i < n; i++){
        preSum.push(preSum[i-1] + nums[i]);
        ans = Math.min(ans, preSum[i]);
    }
    ans = ans < 0 ? ((ans*-1)+1) : 1;
    return ans;
};