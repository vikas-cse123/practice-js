console.time();

const n = 10000000000n;

let sum = 0n;
for (let i = 1n; i <= n; i++) {
  sum += i;
}
console.timeEnd();

console.log({ sum });

//Optimized solution
const sum2 = (n * (n + 1)) / 2;
