/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // const decimalA =  `0b${a}`
    //  const decimalB = `0b${b}`
    //  const addition = BigInt(decimalA) + BigInt(decimalB)
    //  const res  = addition.toString(2)
    //  return res
     return (BigInt(`0b${a}`)+BigInt(`0b${b}`)).toString(2)
    
};