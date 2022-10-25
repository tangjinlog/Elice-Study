/** 40번 놀이동산에가자
 * 한번에 타는 인원수 제한 x
 * 제한 몸무게 있음
 * 1.제한 몸무게
 * 2.친구의 수
 * 3.친구들의 몸무게
 */


const limit = prompt('제한몸무게를 입력해주세요')
const friends = prompt('친구들의 수')
let weight = 0;
let total = 0;
let count = 0;

console.log(typeof weight)

for(let i=0; i<friends; i++) { // 친구 수 만큼 반복
  weight = Math.floor((Math.random() * 100)); //1~100까지의 몸무게
  total += weight;
  console.log(weight)
  if(total < String(limit)) { //제한 몸무게 체크
    count++;
  }  
}
console.log(count)