/** 41번 소수판별하기
 * 1과 자기자신만을 약수로 가지는 수
 */


const input = prompt('숫자를 입력해주세요');
const num = parseInt(input) // 숫자 변환

function isPrime(num) {
  if(num === 1) { // 예외처리 : 1
    console.log('NO!')
    return
  }
  for(let i=2; i<=num; i++){ // 2부터 시작
    if(i < num) { // 자기자신 전까지만 반복
      if(num % i === 0) { // 나머지가 0일때
        console.log('NO!')
        return
      }
    } else { //그 외 : i >= num 일때
      console.log('YES!')
      return
    }      
  }
}