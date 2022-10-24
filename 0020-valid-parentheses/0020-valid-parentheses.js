/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length == 0 || s.length == undefined || s.length == null) {
        return "invalid Length";
    }
    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    let bracketHolder = [];
    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]]) {
            bracketHolder.push(brackets[s[i]]);
        } else if (s[i] != bracketHolder.pop()) {
            return false;
        }
    }
    return !bracketHolder.length;
};