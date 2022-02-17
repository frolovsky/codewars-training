const rangeExtraction = (arr) => {
  let rangeStart = null;
  let rangeEnd = null;
  let ranges = [];

  const getRangeString = ({ rangeStart: start, rangeEnd: end }) => {
    if (end === null) return String(start);
    if (start === (end - 1)) return `${start},${end}`;
    return `${start}-${end}`;
  }

  arr.forEach((n, i) => {
    if (rangeStart === null) {
      rangeStart = n;
    }
    if (n === (arr[i + 1] - 1)) {
      rangeEnd = arr[i + 1];
    } else {
      ranges.push(getRangeString({ rangeStart, rangeEnd }));
      rangeStart = null;
      rangeEnd = null;
    }
  })

  return ranges.join(',');
}



console.log(rangeExtraction([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// outputs: "-6,-3-1,3-5,7-11,14,15,17-20"