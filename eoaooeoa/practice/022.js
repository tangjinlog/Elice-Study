let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(i * 6);
}

console.log(arr);

let result = [];

console.log(arr.filter((val) => val % 6 === 0));

arr.forEach((val) => {
  if (val % 6 === 0) {
    result.push(true);
  } else {
    result.push(false);
  }
})

console.log(result);