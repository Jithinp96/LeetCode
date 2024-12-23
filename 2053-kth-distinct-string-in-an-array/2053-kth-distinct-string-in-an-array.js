/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let distinct = []
    for(let i=0; i<arr.length; i++) {
        let flag=false
        for(let j=0; j<arr.length; j++) {
            if(i!=j && arr[i] === arr[j]) {
                flag = true
                break
            }
        }

        if(flag == false) {
            distinct.push(arr[i])
        }
    }

    if(distinct.length<k) {
        return ''
    } else {
        return distinct[k-1]
    }
};