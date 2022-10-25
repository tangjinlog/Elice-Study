const input = '20 30 40';
let sumsum = 0;
const sum = input.split(' ').forEach((val) => {
  sumsum += parseInt(val)
});

console.log(Math.floor(sumsum / 3));