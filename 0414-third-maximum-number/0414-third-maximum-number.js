/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let n = [...new Set(nums)].sort((a,b) => b-a)
    if(n.length<3){
        return n[0]
    }
    else{
        return n[2]
    }
};