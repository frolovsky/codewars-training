function createSpiral(N) {
  if (typeof N !== 'number' || N < 1 || N % 1 !== 0) return [];
  const res = [];
  const DIRECTIONS = ['right', 'bottom', 'left', 'top'];

  for (let i = 0; i < N; i++) {
    res.push([]);
    for (let j = 0; j < N; j++) {
      res[i][j] = 0;
    }
  }

  const getDirection = (x, y, d) => {
    if (DIRECTIONS[d] === 'right') {
      return res[y][x + 1] !== 0 || res[y][x + 1] === undefined ? d + 1 : d;
    }
    if (DIRECTIONS[d] === 'bottom') {
      return !res[y + 1] || res[y + 1][x] !== 0 || res[y + 1][x] === undefined ? d + 1 : d;
    }
    if (DIRECTIONS[d] === 'left') {
      return res[y][x - 1] !== 0 || res[y][x - 1] === undefined ? d + 1 : d;
    }
    if (DIRECTIONS[d] === 'top') {
      return !res[y - 1] || res[y - 1][x] !== 0 || res[y - 1][x] === undefined ? 0 : d;
    }
  }

  for (let i = 0, max = N ** 2, d = 0, x = 0, y = 0; i < max; i++) {
    d = getDirection(x, y, d);
    if (DIRECTIONS[d] === 'right') {
      res[y][x] = i + 1;
      x += 1;
    }
    if (DIRECTIONS[d] === 'bottom') {
      res[y][x] = i + 1;
      y += 1;
    }
    if (DIRECTIONS[d] === 'left') {
      res[y][x] = i + 1;
      x -= 1;
    }
    if (DIRECTIONS[d] === 'top') {
      res[y][x] = i + 1;
      y -= 1;
    }
  }

  return res;
}

console.log(createSpiral(5.5));