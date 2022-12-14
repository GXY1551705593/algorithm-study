// 二分法
function dichotomy(arr, key) {
  let low = 0,high = arr.length - 1;
  while (low <= high) {
    let midIndex = parseInt((low + high) / 2);
    if (key === arr[midIndex]) {
      return midIndex;
    } else if (key > arr[midIndex]) {
      low = midIndex + 1;
    } else {
      high = midIndex - 1;
    }
  }
  return -1;
}

let arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push(i);
}

let result = dichotomy(arr, 699);
console.log(result);


// 时间复杂度 
// 算法复杂度分为时间复杂度和空间负责度。起作用：时间复杂度是指执行算法所需要的计算工作量；而空间复杂度是指执行这个算法所需要的内存空间。
