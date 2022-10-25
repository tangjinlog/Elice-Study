/** 39번 오타 수정하기
 * 'q'를 'e'로
 */


const input = prompt('입력해주세요').split('');
console.log(`입력: ${input}`);

//filter Array메서드를 이용해 인자값으로받은 (i)인덱스 값으로 요소 재할당
const change = input.filter((e,i)=>{
  if(input[i] === 'q') input[i] = 'e';
})

console.log(input.join(''))