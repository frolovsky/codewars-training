const Counter = (function () {
  let privateCount = 0;

  const privateIncrement = function () {
    privateCount++;
    console.log(privateCount)
  }

  const getCount = function () {
    return privateCount;
  }

  return {
    getCount,
    increment: privateIncrement,
  }
})();

Counter.increment();
Counter.increment();

console.log(Counter.getCount())
