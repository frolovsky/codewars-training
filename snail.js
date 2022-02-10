const snail = (arr) => {
  const getSize = (arr) => {
    if (!arr.length) return 0;
    return arr[0].length * arr.length;
  }

  const size = getSize(arr);
  if (size === 0) return [];

  const result = [];
  const positions = [];

  const getDirection = (x, y, d) => {
    if (d === 0) {
      return (arr[y] !== undefined && arr[y][x + 1] !== undefined && !positions.includes(`${y}_${x+1}`)) ? d : d + 1;
    }

    if (d === 1) {
      return (arr[y + 1] !== undefined && arr[y + 1][x] !== undefined && !positions.includes(`${y+1}_${x}`)) ? d : d + 1;
    }

    if (d === 2) {
      return (arr[y] !== undefined && arr[y][x - 1] !== undefined && !positions.includes(`${y}_${x-1}`)) ? d : d + 1;
    }

    if (d === 3) {
      return (arr[y - 1] !== undefined && arr[y - 1][x] !== undefined && !positions.includes(`${y - 1}_${x}`)) ? d : 0;
    }
  }

  for (let i = 0, x = 0, y = 0, d = 0; i < size; i++) {
    d = getDirection(x, y, d);
    result.push(arr[y][x]);
    positions.push(`${y}_${x}`);

    if (d === 0) x++;
    if (d === 1) y++;
    if (d === 2) x--;
    if (d === 3) y--;
  }

  return result;
}

const snail2 = (array) => {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    console.log(result, array.length)
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}

console.log(snail2([[20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36])