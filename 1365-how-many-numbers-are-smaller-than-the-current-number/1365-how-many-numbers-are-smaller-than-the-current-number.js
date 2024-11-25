/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let ar=[]
    for(i=0;i<nums.length;i++){
        let count=0
        for(j=0;j<nums.length;j++){
           if(nums[i]>nums[j]&&i!=j){
               count++
           }
       }
       ar.push(count)
   }
   return ar
};