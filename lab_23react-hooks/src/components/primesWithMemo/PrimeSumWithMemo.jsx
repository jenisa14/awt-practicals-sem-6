import { useMemo, useState } from "react";

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function PrimeSumWithMemo() {
  const [count, setCount] = useState(0);

  const primeSum = useMemo(() => {
    let primeCount = 0;
    let sum = 0;
    let num = 2;

    while (primeCount < 5000) {
      if (isPrime(num)) {
        sum += num;
        primeCount++;
      }
      num++;
    }

    return sum;
  }, []);

  return (
    <div>
      <h2>Sum of first 5000 primes: {primeSum}</h2>
      <button onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </button>
    </div>
  );
}

export default PrimeSumWithMemo;