let arr = '4 11 2 10 3 1'.split(' ');
let sorted = '';

sorted = arr.sort((a, b) => a - b).join(' ');
// sorted = arr.sort().join(' ');

console.log(sorted);

if (arr === sorted) {
  console.log("Yes");
} else {
  console.log("No");
}