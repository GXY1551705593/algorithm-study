// js 动态数组 实现add remove hasItem
Array.prototype.add = function(val) {
  return [...this,val]
}

Array.prototype.remove = function(val) {
  let newArr = []
  for(let i = 0; i < this.length; i++) {
    if(this[i] !== val) newArr.push(this[i])
  }
  return newArr
}

Array.prototype.hasItem = function(val) {
  let result = false
  for(let i = 0; i < this.length; i++) {
    if(this[i] === val) {
      result = true
      break
    }
  }
  return result
}