/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let oc = []
    arr.sort((a,b) => a-b)
    let count
    let flag=true
    let k
    
    for(let i=0; i<arr.length; i++) {
        count = 1;
        for(let j=i+1; j<arr.length;j++) {
            if(arr[i] === arr[j]) {
                count ++
                i++
            } else {
                break
            }
        }
        oc.push(count)

    }
    console.log(oc)
    for(let i=0; i<oc.length; i++) {
        for(let j=i+1; j<oc.length; j++) {
            if(oc[i] === oc[j]) {
                return false
            }
        }
    }
    return true
};