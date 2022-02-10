function sumOfDivided(arr) {
  const primes = [];
  const result = [];
  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  arr.forEach(n => {
    for (let i = 2, s = Math.abs(n); i <= s; i++) {
      if (!primes.includes(i) && isPrime(i) && n % i === 0) {
        primes.push(i);
      }
    }
  });

  primes
    .sort((a, b) => a - b)
    .forEach(prime => {
    const sum = arr.reduce((acc, n) => {
      if (n % prime === 0) {
        acc += n;
      }
      return acc;
    }, 0);
    result.push([prime, sum]);
  });
  console.log(result)
  return result;
}

sumOfDivided([-29804, -4209, -28265, -72769, -31744]);

// testing([12, 15], [ [2, 12], [3, 27], [5, 15] ]);
// testing([15,21,24,30,45], [ [2, 54], [3, 135], [5, 90], [7, 21] ]);