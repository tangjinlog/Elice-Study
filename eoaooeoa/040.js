// const inp = '50\n5\n50\n20\n20\n20\n20'.split('\n');
// console.log(inp);

// let limitWeight = inp[0];
// const personNum = inp[1];
// const personWeights = [];
// let result = 0;

// for (let i = 2; i < inp.length; i++) {
//   personWeights.push(inp[i]);
// }

// console.log(personWeights);

// for (let i = 0; i < personNum; i++) {
//   limitWeight -= personWeights[i];
  
//   if (limitWeight < 0) {
//     break;
//   } else {
//     result += 1;
//   }
// }

// console.log(result);

let total = 0;
let count = 0;
const limit = '50';
const n = '5';
const weights = '20\n20\n20\n20\n20'.split('\n');

for (let i=1; i<=n; i++){
  total += parseInt(weights[i - 1], 10);
  if (total <= limit){
		count = i;
  }
}

console.log(count);