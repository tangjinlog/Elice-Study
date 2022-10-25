// const inputArr = '97 86 75 66 55 97 85 97 97 95'.split(' ').sort().reverse();
// let buyCandy = 0;
// let rank = 0;

// console.log(inputArr);
// for (let i = 1; i < inputArr.length; i++) {
//   if (rank >= 3) {
//     break;
//   } else if (inputArr[0] == inputArr[i]) {
//     buyCandy += 1;
//   } else {
//     buyCandy += 1;
//     rank += 1;
//   }
// }

// console.log(buyCandy);

const scores = '97 86 75 66 55 97 85 97 97 95'.split(' ').map(function(n){
  return parseInt(n, 10);
});

scores.sort((a, b) => {
  return a-b;
});
console.log(scores);
let count = 0;
let arr = [];

while (arr.length < 3) {
  let n = scores.pop();
  if (!arr.includes(n)){
    arr.push(n);
  }
  count += 1;
}

console.log(count);