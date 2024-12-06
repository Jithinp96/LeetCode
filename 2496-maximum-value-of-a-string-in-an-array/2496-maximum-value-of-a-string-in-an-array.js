/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let large = 0
    let arr = []
    for(let i=0; i<strs.length; i++) {
        let n = Number(strs[i])
        if(n>=0) {
            if(n>large) {
                large = n
            }
        } else {
            if(strs[i].length > large) {
                large = strs[i].length
            }
        }
    }
    return large
};