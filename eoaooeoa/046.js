const n = 10
const m = 15
let str = ''
let sum = 0

for (let i = n; i <= m; i++) {
  str += i
}

console.log(str)

for (let i = 0; i < str.length; i++) {
  sum += parseInt(str[i])
}

console.log(sum)