function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function PrimeSum() {
  let count = 0;
  let sum = 0;
  let num = 2;

  while (count < 5000) {
    if (isPrime(num)) {
      sum += num;
      count++;
    }
    num++;
  }

  return <h2>Sum of first 5000 primes: {sum}</h2>;
}

export default PrimeSum;