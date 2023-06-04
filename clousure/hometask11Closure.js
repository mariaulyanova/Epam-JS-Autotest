// Implement the fibonacci function initially without any caching mechanism. 
// Then, define a closure fibonacciWithCaching that encapsulates the computation function and a cache object.

// Within the closure, the computeFibonacci function checks if the result for a given input n is already cached. 
// If it is, the cached result is returned. Otherwise, the computation is performed and the result is stored in the cache for future use.

// Test the implementation by creating an instance of fibonacciCached using 
// fibonacciWithCaching(). Call this instance with different inputs and observe that the first time 
// a value is computed, it is not cached. However, subsequent calls with the same input retrieve 
// the result from the cache, resulting in improved performance.

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function fibonacciWithCaching() {
  let cache = {};

  function computeFibonacci(n) {
    if (n in cache) {
      return cache[n] + ' (Cached)';
    } else {
      const result = fibonacci(n);
      cache[n] = result;
      return result +  ' (Computed)';
    }
  }

  computeFibonacci.logCache = function() {
    console.log(cache);
  };

  return computeFibonacci;
}

const fibonacciCached = fibonacciWithCaching();

console.log(fibonacciCached(5)); // 5 (Computed)

console.log(fibonacciCached(3)); // 2 (Computed)

console.log(fibonacciCached(5)); // 5 (Cached)

console.log(fibonacciCached(10)); // 55 (Computed)

console.log(fibonacciCached(3)); // 2 (Cached)

console.log(fibonacciCached(10)); // 55 (Cached)

fibonacciCached.logCache(); // { '3': 2, '5': 5, '10': 55 }

// console.log(fibonacci(5));
 