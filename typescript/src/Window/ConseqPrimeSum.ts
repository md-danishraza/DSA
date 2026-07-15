export {};

// TC = NloglogN
// SC = N

function conseqPrimeSum(limit: number) {
  // calculate all primes till limit
  // using boolean
  let primesBool: boolean[] = Array(limit).fill(true);
  // 0 and are not prime
  primesBool[0] = primesBool[1] = false;

  // check prime till SQRT of limit
  for (let i = 2; i * i < limit; i++) {
    // if its a prime
    if (primesBool[i]) {
      // mark all of its multiple false
      // as they can be factorized by it
      // start with very next multiple
      for (let j = i * i; j < limit; j += i) {
        primesBool[j] = false;
      }
    }
  }

  // gather all primes in new array
  let primes: number[] = [];
  for (let i = 2; i < limit; i++) {
    if (primesBool[i]) primes.push(i);
  }

  //   console.log(primes.slice(0, 10));

  // compute prefix sum
  let prefixSum: number[] = [0];

  for (let i = 0; i < primes.length + 1; i++) {
    let sum = prefixSum[i] + primes[i];
    // no need to check sum > limit
    if (sum > limit) break;
    prefixSum.push(sum);
  }

  let maxPrimeSum = 0;
  let maxSequenceLength = 0;
  const numPrefixes = prefixSum.length;

  // i is the starting point of the prime sequence, j is the ending point
  for (let i = 0; i < numPrefixes; i++) {
    // Optimization: if the remaining window size can't beat our current best length, break
    for (let j = i + maxSequenceLength + 1; j < numPrefixes; j++) {
      let sum = prefixSum[j] - prefixSum[i];

      // If the sum exceeds our 1-million limit, moving j further right will only make it bigger
      if (sum >= limit) break;

      // If the sum is prime, update our records
      if (primesBool[sum]) {
        maxSequenceLength = j - i;
        maxPrimeSum = sum;
      }
    }
  }

  console.log(`Longest chain length: ${maxSequenceLength}`);
  return maxPrimeSum;
}

console.log(conseqPrimeSum(1000000));
