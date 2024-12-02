/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let temp1, temp2;
    for (let i=0;i<heights.length;i++) {
        for (let j=i+1; j<heights.length;j++){
            if(heights[j]>heights[i]) {
                temp1=heights[i];
                heights[i] = heights[j];
                heights[j] = temp1
                temp2 = names[i]
                names[i] = names[j]
                names[j] = temp2
            }
        }
    }
    return names
};