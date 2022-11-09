const n = '3849'
const arr = n.split('')
let sum = 0

console.log(arr)

arr.forEach(num => {
  sum += parseInt(num)
})

console.log(sum)