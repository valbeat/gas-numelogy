function Numelogy(input) {
  if (input == '') {
    return input
  }
  var arr = input.split('')
  arr = arr.map(Number)
  var sum = arr.reduce(function(prev, current, i, arr) {
    return prev + current
  })
  sum = String(sum)
  if (sum == 11 || sum == 22 || sum.length < 2) {
    return sum
  } else {
    return Numelogy(sum)
  }
}