// 实现add(2,3,4) add(2)(3,4) add(2)(3)(4)  add(2,3)(4) 都等于9
function add(...a) {
  var sum = 0
  if (a.length === 0) {
    return sum;
  }
  sum += a.reduce((a,b) => a+b)
  function add2(...b) {
    if (b.length === 0) {
      return sum
    }
    sum += b.reduce((a,b) => a+b)
    return add2
  }

  add2.toString = function () {
    return '' + sum
  }
  add2.valueOf = function () {
    return sum
  }
  return add2
}