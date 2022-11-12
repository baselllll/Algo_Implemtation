/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     // first step create func to remove spaces and pouctions 
    let newString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    let length = newString.length - 1;
    for (let index = 0; index < newString.length / 2; index++) {
        if (newString[index] != newString[length])
            return false
        length--;
    }
    return true

};