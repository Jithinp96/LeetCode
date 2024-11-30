/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let count = {}
    let str = paragraph.toLowerCase().replace(/[^a-zA-Z\s]/g," ").split(" ")
    for(let elem of str) {
        if(elem == " " || elem == "") continue
        
        if(count[elem]) {
            count[elem]++
        } else {
            count[elem] = 1
        }
    }
    let maxCount= ""
    let common = -Infinity

    for(let ele in count) {
        if(banned.includes(ele)) continue

        if(count[ele] > common) {
            maxCount = ele
            common = count[ele]
        }
    }
    return maxCount
};