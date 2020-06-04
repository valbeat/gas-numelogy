/**
 * Calculate numelogy
 *
 * @param {number} input The value for birthday.
 * @return The numelogy number.
 * @customfunction
 */
function Numelogy(input) {
  if (input == '') {
    return input
  }
  // Calls recursively for arrays.
  if (input.map) {            
    return input.map(Numelogy)
  }

  var arr = input.split('')
  arr = arr.map(Number)
  var sum = arr.reduce(function(prev, current, i, arr) {
    return prev + current
  })
  sum = String(sum)
  if (sum == 11 || sum == 22 || sum == 33 || sum.length < 2) {
    return sum
  } else {
    return Numelogy(sum)
  }
}
