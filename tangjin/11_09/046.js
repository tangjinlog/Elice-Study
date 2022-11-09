//입력값을 일렬로 나열한 다음, 각 자리 수를 더하라

const input = prompt('시작 숫자를 입력하세요.');
const input2 = prompt('끝 숫자를 입력하세요.');
let strTotal = ''; // 입력을 문자열로 받아 합칠 변수
let numTotal = 0; // strTotal을 바탕으로 각 자리를 더 할 변수

const addNum = (start,end) => { //시작과 끝 파라미터
    for(let i=start; i<=end; i++){ //문자열로 합치기
      strTotal += i
    }
  
    for(let i=0; i<strTotal.length; i++){ //각 자리 수 합치기
      numTotal += parseInt(strTotal[i])
    }
    
    return numTotal;  
}

console.log(addNum(input,input2))