const students = "원범 원범 혜원 혜원 혜원 유진 유진".split(' ');
let result = {};
let winner = "";

for (let i in students) {
  let val = students[i];
  result[val] = result[val] === undefined ? 1 : result[val] += 1;
}

console.log(result);

winner = Object.keys(result);

console.log(winner);

winner = winner.reduce((a, b) => {
  return result[a] > result[b] ? a : b;
});

console.log(winner);