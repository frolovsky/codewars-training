const sumArray = (arr) => {
  return arr
    .reduce((sum, n) => {
      return sum += n;
    }, 0);
}

const getMaxSubarray = (arr) => {
  let maxSubarraySum = null;
  let maxSubarrayStartIndex = 0;
  let maxSubarrayLength = 0;

  for (let i = 0; i < arr.length; i++) {
    let subarraySum = 0;
    for (let j = 0; j < (arr.length - i); j++) {
      subarraySum += arr[i + j];
      if (maxSubarraySum === null || subarraySum > maxSubarraySum) {
        maxSubarraySum = subarraySum;
        maxSubarrayStartIndex = i;
        maxSubarrayLength = j + 1;
      }
    }
  }

  return arr.slice(maxSubarrayStartIndex, maxSubarrayStartIndex + maxSubarrayLength);
}

const maxSequence = function(arr){
  if (!arr.some(n => n > 0)) return 0;
  if (arr.every(n => n >= 0)) sumArray(arr);
  return sumArray(getMaxSubarray(arr));
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))