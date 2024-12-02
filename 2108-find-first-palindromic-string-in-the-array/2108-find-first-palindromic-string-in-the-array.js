/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let num = words.length
    for(let i=0; i<num; i++) {
        let word = words[i]
        let len = word.length
        let flag = 0;
        for (let k=0, j=len-1; j>k; k++, j--) {
            if(word[k]!==word[j]) {
                flag = 1;
                continue
            }
        }
        if(flag==0) {
            return words[i];
            break;
        }
    }
    return ''
};