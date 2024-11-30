/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let flag
    let newArr1 = []
    let newArr2 = []
    let finalArr = []
    for(let i=0; i<nums1.length; i++) {
        flag = false
        for(let j=0; j<nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                flag = true
                break
            }
        }
        if(flag === false) {
            if(newArr1.includes(nums1[i])) {
                continue
            } else {
                newArr1.push(nums1[i])
            }
        }
    }

    for(let i=0; i<nums2.length; i++) {
        flag = false
        for(let j=0; j<nums1.length; j++) {
            if(nums2[i] === nums1[j]) {
                flag = true
                break
            }
        }
        if(flag === false) {
            if(newArr2.includes(nums2[i])) {
                continue
            } else {
                newArr2.push(nums2[i])
            }
        }
    }
    finalArr.push(newArr1, newArr2)
    return finalArr
};