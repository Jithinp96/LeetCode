/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let sum =0
    let length=nums.length;
    
    for(i=0;i<length;i++){
        if(length%(i+1)==0){
            sum+=nums[i]*nums[i]
        }
    }
    return sum
};