const n = 5;

let tree = '';

for (let i = 1; i <= n; i++) {
  let star = '';
  for (let j = 1; j <= n-i; j++) { // 4, 3, 2, 1
    star += ' ';
  }
  for (let k = 1; k <= 2 * i - 1; k++) { // 1, 3, 5, 7, 9
    star += '*';
  }
  console.log(star);
}