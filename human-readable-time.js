const humanReadable = (seconds) => {
  const result = ['00', '00', '00', '00'];
  const formatNumber = (n) => n <= 9 ? '0' + n : n;
  for (let i = 1; i <= result.length; i++) {
    const m = 60 ** (3 - i);
    result[i - 1] = formatNumber(Math.floor(seconds / m));
    if (result[i - 1] !== '00') {
      seconds -= Math.floor(seconds / m) * m;
    }
  }
  return result.join(':');
}

// strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');

console.log(humanReadable(400049))