/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // var k = 0;
  //   var maxLength = 0;
  //   for(i = 0; i < s.length; i++) {
  //       for (j = k; j < i; j++) {
  //           if (s[i] === s[j]) {
  //               k = j + 1;
  //               break;
  //           }
  //       }
  //       if (i - k + 1 > maxLength) {
  //           maxLength = i - k + 1;
  //       }
  //   }
  //   return maxLength; 
    var start = 0, maxLen = 0;
    var map = new Map();
    for (let index = 0; index < s.length; index++) {
        let ch = s[index]
        // check that char exist on Map -----> do update for the start (that mean that exist repition)
        if (map.get(ch) >= start) {
            start = map.get(ch) + 1;
        }
        map.set(ch, index)
        maxLen = Math.max(maxLen, index - start + 1)
    }
    return maxLen
};