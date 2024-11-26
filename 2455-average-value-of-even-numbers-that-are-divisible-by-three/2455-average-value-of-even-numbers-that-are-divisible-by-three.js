/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0;
    let i=0;
    for(let j=0; j<nums.length; j++){
        if(nums[j]%6==0){
            sum=sum+nums[j];
            i++;
        }
    }
    if(i==0){
        return 0;
    }
    else{
        let avg = sum/i;
        return Math.floor(avg);
    }
};