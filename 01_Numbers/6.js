console.time()
const n = 100000000n;
let sum = 0n;
for (let i = 1n; i <= n; i++) {
  if (i % 2n === 0n) {
    sum += i;
  }
}
console.log({ sum });
console.timeEnd()


// console.time()
// let k = n / 2n;
// let s = k * (k + 1n);
// console.log({ s });
// console.timeEnd()