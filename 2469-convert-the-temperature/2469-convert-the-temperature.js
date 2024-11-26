/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    ans=[celsius+273.15, (celsius*1.8)+32];
    return ans;
};