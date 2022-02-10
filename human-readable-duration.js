function formatDuration (seconds) {
  if (seconds === 0) return 'now';
  const getWord = (word, n) => n > 1 ? `${word}s` : word;
  const DATA_PARAMS = [
    { noun: 'year', price: 3600 * 24 * 365 },
    { noun: 'day', price: 3600 * 24 },
    { noun: 'hour', price: 3600 },
    { noun: 'minute', price: 60 },
    { noun: 'second', price: 1 },
  ];

  const result = DATA_PARAMS.reduce((acc, PARAM) => {
    const n = Math.floor(seconds /  PARAM.price);
    if (n) {
      seconds -= Math.floor(seconds / PARAM.price) * PARAM.price;
      acc.push(`${n} ${getWord(PARAM.noun, n)}`);
    }
    return acc;
  }, []);

  let resultString = result.join(', ');
  const lastCommaIndex = resultString.lastIndexOf(',');
  if (lastCommaIndex !== -1) {
    resultString = resultString.substr(0, lastCommaIndex) + ' and' + resultString.substr(lastCommaIndex + 1);
  }
  return resultString;
}


formatDuration(48)    // returns "1 minute and 2 seconds"
formatDuration(36648942)  // returns "1 hour, 1 minute and 2 seconds"