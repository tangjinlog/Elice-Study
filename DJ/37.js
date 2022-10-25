//37-반장선거

let nameList = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";
let splitName = nameList.split(" ");


const result = splitName.reduce((acc, cur) => {
    return acc[cur] = (acc[cur] || 0) + 1, acc
}, {});

winner = Object.keys(result).reduce(function(a, b){
  return result[a] > result[b] ? a : b
});
console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);