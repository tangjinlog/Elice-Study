
//38-호준이의 아르바이트
// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6

var input = "97 86 75 66 55 97 85 97 97 95"
const array = input.split(' ').map(function(n){
  return Number(n);
});

array.sort((a, b) => {
  return b-a;
});

const rankArray = array.filter((elem,i)=>{
  return array.indexOf(elem)===i;
})
console.log(array);
console.log(rankArray);
const result = array.indexOf(rankArray[3]);
console.log(result);