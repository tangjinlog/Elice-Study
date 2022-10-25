const keys = "Yujin Hyewon".split(" ");
const values = "70 100".split(" ");
let obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = parseInt(values[i]);
}

console.log(obj);