// 10진수를 입력받아 2진수로 출력

// let input = prompt('숫자를 입력해주세요.')
let input = '13'
let num = input;
let arr = []; // 2로 나눈 나머지를 담을 배열

while(num > 0) { // 더이상 2로 나누어 지지 않을 떄까지 반복
  if(num/2 !== 0) { //입력값을 2로나눈 몫이 0이 아닐때
    arr.push(num%2); //나머지를 푸시
    num = Math.floor(num /2); //소숫점 버리고 재 할당
  }
}
arr.reverse() // arr.push는 요소가 마지막에 추가되기 때문에 순서를 다시 바꿔줌
console.log(`${input} => ${arr.join('')} 변환되었습니다.`)