const n = 101;
let result = 'NO';

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    break;
  }
  result = 'YES';
}

console.log(result);

// const num = 10;

// function check_prime(num) {
//   for (let i=2; i<num; i++) {
//     const result = num % i;
//     if (result === 0) {
//       console.log('NO');
//       return false;
//     }
//   }
//   if (num === 1) {
//     console.log('NO');
//     return;
//   }
//   console.log('YES');
// }

// check_prime(num);