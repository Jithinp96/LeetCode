/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum1 =0;
    let sum2=0;
    
    for(let i=0;i<nums.length;i++){
        sum1+=nums[i];
    }
    
    let a = nums.join('');
    let str=a.toString()
    
    for(i=0;i<str.length;i++){
       sum2+=parseInt (str[i])
    }

    return sum1-sum2
};