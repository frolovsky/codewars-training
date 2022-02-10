const moveZeros = (arr) => {
  return arr.reduce((acc, item, index, initialArray) => {
    if (item !== 0) acc.push(item);
    if (index === initialArray.length - 1) {
      for (let i = 0, m = initialArray.length - acc.length; i < m; i++) {
        acc.push(0);
      }
    }
    return acc;
  }, []);
}

moveZeros([false,1,0,1,2,0,1,3,"a"]); // returns[false,1,1,2,1,3,"a",0,0]

console.log(new Array(5).fill(0))