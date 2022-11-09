// 각 자리 수 합치기

const input = prompt('입력');

let total = 0;

const addNum = () => {
    for(let i=0; i<input.length; i++){ //입력값 길이만큼 반복
      total += parseInt(input[i]) // number 타입으로 변환해서 더하기
    }
    return total;
}

console.log(addNum(input))