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

const getMaxSubarrayDP = (arr) => {
  const l = arr.length;
  let maxSubarraySum = -Infinity;
  let maxEndIndex = l - 1;
  let maxStartIndex = 0;
  let currentStartIndex = 0;
  let currentSum = 0;

  arr.forEach((currentNumber, currentIndex) => {
    currentSum += currentNumber;

    if (currentSum > maxSubarraySum) {
      maxSubarraySum = currentSum;
      maxEndIndex = currentIndex;
      maxStartIndex = currentStartIndex;
    }

    if (currentSum < 0) {
      currentSum = 0;
      currentStartIndex = currentIndex + 1;
    }
  })
  return arr.slice(maxStartIndex, maxEndIndex + 1);
}

const maxSequence = function(arr){
  if (!arr.some(n => n > 0)) return 0;
  if (arr.every(n => n >= 0)) sumArray(arr);
  return sumArray(getMaxSubarrayDP(arr));
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))